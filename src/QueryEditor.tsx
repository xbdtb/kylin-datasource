import { QueryEditorProps, SelectableValue } from '@grafana/data';
import { AsyncSelect, CodeEditor, Label, Select } from '@grafana/ui';
import { find } from 'lodash';

import React, { ComponentType } from 'react';
import { DataSource } from './DataSource';
import { Format } from './format';

import { GenericOptions, GrafanaQuery } from './types';

type Props = QueryEditorProps<DataSource, GrafanaQuery, GenericOptions>;

const formatAsOptions = [
  { label: 'Time series', value: Format.Timeseries },
  { label: 'Table', value: Format.Table },
];

export const QueryEditor: ComponentType<Props> = ({ datasource, onChange, onRunQuery, query }) => {
  const [formatAs, setFormatAs] = React.useState<SelectableValue<Format>>(
    find(formatAsOptions, option => option.value === query.type) ?? formatAsOptions[0]
  );
  const [metric, setMetric] = React.useState<SelectableValue<string>>();
  const [data, setData] = React.useState(query.data ?? '');
  let project = '';
  let timeField = '';
  let sql = '';
  if (!!data) {
    const obj = JSON.parse(data);
    project = obj.project;
    timeField = obj.timeField;
    sql = obj.sql;
  }

  function changeData(changed: any) {
    let obj = {};
    if (!!data) {
      obj = JSON.parse(data);
    }
    setData(JSON.stringify({...obj, ...changed}));
  }

  React.useEffect(() => {
    if (formatAs.value === undefined) {
      return;
    }

    if (metric?.value === undefined) {
      return;
    }

    onChange({ ...query, data: data, target: metric.value, type: formatAs.value });

    onRunQuery();
  }, [data, formatAs, metric]);

  const loadMetrics = (searchQuery: string) => {
    return datasource.metricFindQuery(searchQuery).then(
      result => {
        const metrics = result.map(value => ({ label: value.text, value: value.value }));

        setMetric(find(metrics, metric => metric.value === query.target));

        return metrics;
      },
      response => {
        throw new Error(response.statusText);
      }
    );
  };

  return (
    <>
      <div className="gf-form-inline">
        <div className="gf-form">
          <Select
            prefix="Format As: "
            options={formatAsOptions}
            defaultValue={formatAs}
            onChange={v => {
              setFormatAs(v);
            }}
          />
        </div>

        <div className="gf-form">
          <AsyncSelect
            prefix="Metric: "
            loadOptions={loadMetrics}
            defaultOptions
            placeholder="Select metric"
            allowCustomValue
            value={metric}
            onChange={v => {
              setMetric(v);
            }}
          />
        </div>
        <div className="gf-form-label">
          Project
        </div>
        <div className="gf-form">
          <input
              type="text"
              className="gf-form-input"
              placeholder="input project name"
              value={project}
              onChange={e => changeData({ project: e.currentTarget.value })}
            />
        </div>
        <div className="gf-form-label">
          Time Field
        </div>
        <div className="gf-form">
          <input
              type="text"
              className="gf-form-input"
              placeholder="input time field ame"
              value={timeField}
              onChange={e => changeData({ timeField: e.currentTarget.value })}
            />
        </div>
      </div>
      <div className="gf-form gf-form--alt">
        <div className="gf-form-label">
          <Label>SQL</Label>
        </div>
        <div className="gf-form">
          <CodeEditor
            width="800px"
            height="100px"
            language="sql"
            showLineNumbers={true}
            showMiniMap={data.length > 100}
            value={sql}
            onBlur={value => changeData({ sql: value })}
          />
        </div>
      </div>
    </>
  );
  // }
};
