import { DataQueryResponse, DataSourceApi, DataSourceInstanceSettings } from '@grafana/data';
import { AnnotationEvent } from '@grafana/data/types/data';
import { AnnotationQueryRequest } from '@grafana/data/types/datasource';
import { getBackendSrv, getTemplateSrv } from '@grafana/runtime';
import { isEqual, isObject } from 'lodash';
import {
  GenericOptions,
  GrafanaQuery,
  MetricFindTagKeys,
  MetricFindTagValues,
  MetricFindValue,
  MultiValueVariable,
  QueryRequest,
  TextValuePair,
} from './types';

const supportedVariableTypes = ['adhoc', 'constant', 'custom', 'query'];

export class DataSource extends DataSourceApi<GrafanaQuery, GenericOptions> {
  url: string;
  withCredentials: boolean;
  headers: any;

  constructor(instanceSettings: DataSourceInstanceSettings<GenericOptions>) {
    super(instanceSettings);

    this.url = instanceSettings.url === undefined ? '' : instanceSettings.url;

    this.withCredentials = instanceSettings.withCredentials !== undefined;
    this.headers = { 'Content-Type': 'application/json' };
    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      this.headers['Authorization'] = instanceSettings.basicAuth;
    }
  }

  async query(options: QueryRequest): Promise<DataQueryResponse> {
    const request = this.processTargets(options);

    if (request.targets.length === 0) {
      return Promise.resolve({ data: [] });
    }

    // @ts-ignore
    request.adhocFilters = getTemplateSrv().getAdhocFilters(this.name);

    options.scopedVars = { ...this.getVariables(), ...options.scopedVars };
    const resultData: any = [];
    for (let i = 0; i < request.targets.length; i++) {
      const data: any = request.targets[i].data;
      let from = options.range.from;
      let to = options.range.to;
      let sql = data.sql.replace(
        '$__timeFilter',
        `${data.timeField} BETWEEN '${from.format('YYYY-MM-DD HH:mm:ss')}' AND '${to.format('YYYY-MM-DD HH:mm:ss')}'`
      );
      const body = {
        project: data.project,
        sql: sql,
      };
      const response = await this.doRequest({
        url: `${this.url}/api/query`,
        data: body,
        method: 'POST',
      });
      const columns = response.data.columnMetas.map((col: any) => ({ text: col.label }));
      for (let j = 0; j < response.data.results.length; j++) {
        if (request.targets[i].type !== 'table') {
          if (!!response.data.results[j][0]) {
            response.data.results[j][0] = parseFloat(response.data.results[j][0]);
          } else {
            response.data.results[j][0] = 0;
          }
        }
      }
      resultData.push({
        refId: request.targets[i].refId,
        columns: columns,
        datapoints: response.data.results,
        target: response.data.columnMetas[0].label,
      });
    }
    const splitResultData = [];
    for (let i = 0; i < resultData.length; i++) {
      console.log('request.targets[i]: ', request.targets[i]);
      const data: any = request.targets[i].data;
      const metricField: string = data.metricField;
      if (!!metricField) {
        let metricFieldIndex = 0;
        for (let j = 0; j < resultData[i].columns.length; j++) {
          const text: string = resultData[i].columns[j].text;
          if (metricField.toLowerCase() === text.toLowerCase()) {
            metricFieldIndex = j;
            break;
          }
        }
        for (let j = 0; j < resultData[i].datapoints.length; j++) {
          const pushItem: any = {
            refId: request.targets[i].refId,
            columns: resultData[i].columns,
            target: resultData[i].datapoints[j][metricFieldIndex],
          };
          const fieldName = request.targets[i].type === 'table' ? 'rows' : 'datapoints';
          pushItem[fieldName] = [resultData[i].datapoints[j]];
          splitResultData.push(pushItem);
        }
      } else {
        if (request.targets[i].type === 'table') {
          resultData[i]['rows'] = resultData[i]['datapoints'];
          delete resultData[i]['datapoints'];
        }
        splitResultData.push(resultData[i]);
      }
    }
    return { data: splitResultData };
  }

  testDatasource(): Promise<any> {
    return this.doRequest({
      url: this.url,
      method: 'GET',
    }).then(response => {
      if (response.status === 200) {
        return { status: 'success', message: 'Data source is working', title: 'Success' };
      }

      return {
        status: 'error',
        message: `Data source is not working: ${response.message}`,
        title: 'Error',
      };
    });
  }

  metricFindQuery(query: string, options?: any, type?: string): Promise<MetricFindValue[]> {
    return Promise.resolve(this.mapToTextValue({ data: ['Auto'] }));
    // const interpolated = {
    //   type,
    //   target: getTemplateSrv().replace(query, undefined, 'regex'),
    // };

    // return this.doRequest({
    //   url: `${this.url}/search`,
    //   data: interpolated,
    //   method: 'POST',
    // }).then(this.mapToTextValue);
  }

  getTagKeys(options?: any): Promise<MetricFindTagKeys[]> {
    return new Promise(resolve => {
      this.doRequest({
        url: `${this.url}/tag-keys`,
        method: 'POST',
        data: options,
      }).then((result: any) => {
        return resolve(result.data);
      });
    });
  }

  getTagValues(options: any): Promise<MetricFindTagValues[]> {
    return new Promise(resolve => {
      this.doRequest({
        url: `${this.url}/tag-values`,
        method: 'POST',
        data: options,
      }).then((result: any) => {
        return resolve(result.data);
      });
    });
  }

  annotationQuery(
    options: AnnotationQueryRequest<GrafanaQuery & { query: string; iconColor: string }>
  ): Promise<AnnotationEvent[]> {
    const query = getTemplateSrv().replace(options.annotation.query, {}, 'glob');

    const annotationQuery = {
      annotation: {
        query,
        name: options.annotation.name,
        datasource: options.annotation.datasource,
        enable: options.annotation.enable,
        iconColor: options.annotation.iconColor,
      },
      range: options.range,
      rangeRaw: options.rangeRaw,
      variables: this.getVariables(),
    };

    return this.doRequest({
      url: `${this.url}/annotations`,
      method: 'POST',
      data: annotationQuery,
    }).then((result: any) => {
      return result.data;
    });
  }

  mapToTextValue(result: any) {
    return result.data.map((d: any, i: any) => {
      if (d && d.text && d.value) {
        return { text: d.text, value: d.value };
      }

      if (isObject(d)) {
        return { text: d, value: i };
      }
      return { text: d, value: d };
    });
  }

  doRequest(options: any) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;

    return getBackendSrv().datasourceRequest(options);
  }

  processTargets(options: QueryRequest) {
    options.targets = options.targets
      .filter(target => {
        // remove placeholder targets
        return target.target !== undefined;
      })
      .map(target => {
        if (target.data.trim() !== '') {
          target.data = JSON.parse(target.data, (key, value) => {
            if (typeof value === 'string') {
              return value.replace((getTemplateSrv() as any).regex, match => this.cleanMatch(match, options));
            }

            return value;
          });
        }

        if (typeof target.target === 'string') {
          target.target = getTemplateSrv().replace(target.target.toString(), options.scopedVars, 'regex');
        }

        return target;
      });

    return options;
  }

  cleanMatch(match: string, options: any) {
    const replacedMatch = getTemplateSrv().replace(match, options.scopedVars, 'json');
    if (
      typeof replacedMatch === 'string' &&
      replacedMatch[0] === '"' &&
      replacedMatch[replacedMatch.length - 1] === '"'
    ) {
      return JSON.parse(replacedMatch);
    }
    return replacedMatch;
  }

  getVariables() {
    const variables: { [id: string]: TextValuePair } = {};
    Object.values(getTemplateSrv().getVariables()).forEach(variable => {
      if (!supportedVariableTypes.includes(variable.type)) {
        console.warn(`Variable of type "${variable.type}" is not supported`);

        return;
      }

      if (variable.type === 'adhoc') {
        // These are being added to request.adhocFilters
        return;
      }

      const supportedVariable = variable as MultiValueVariable;

      let variableValue = supportedVariable.current.value;
      if (variableValue === '$__all' || isEqual(variableValue, ['$__all'])) {
        if (supportedVariable.allValue === null || supportedVariable.allValue === '') {
          variableValue = supportedVariable.options.slice(1).map(textValuePair => textValuePair.value);
        } else {
          variableValue = supportedVariable.allValue;
        }
      }

      variables[supportedVariable.id] = {
        text: supportedVariable.current.text,
        value: variableValue,
      };
    });

    return variables;
  }
}
