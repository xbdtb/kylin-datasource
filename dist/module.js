define(["react","@grafana/runtime","@grafana/ui","lodash","@grafana/data"],(function(e,t,r,a,n){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=5)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t,r){"use strict";r.r(t);var a=r(4),n=r(2),o=r(0),u=r.n(o),l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function s(e,t,r,a){return new(r||(r=Promise))((function(n,o){function u(e){try{i(a.next(e))}catch(e){o(e)}}function l(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,l)}i((a=a.apply(e,t||[])).next())}))}function c(e,t){var r,a,n,o,u={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,a=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(n=u.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){u.label=o[1];break}if(6===o[0]&&u.label<n[1]){u.label=n[1],n=o;break}if(n&&u.label<n[2]){u.label=n[2],u.ops.push(o);break}n[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function f(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,o=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)u.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return u}var p,d=r(1),m=r(3),g=["adhoc","constant","custom","query"],h=function(e){function t(t){var r=e.call(this,t)||this;return r.url=void 0===t.url?"":t.url,r.withCredentials=void 0!==t.withCredentials,r.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&t.basicAuth.length>0&&(r.headers.Authorization=t.basicAuth),r}return function(e,t){function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.query=function(e){return s(this,void 0,Promise,(function(){var t,r,a,n,o,u,l,s,f,p,m,g,h,v,y,b,O;return c(this,(function(c){switch(c.label){case 0:if(0===(t=this.processTargets(e)).targets.length)return[2,Promise.resolve({data:[]})];t.adhocFilters=Object(d.getTemplateSrv)().getAdhocFilters(this.name),e.scopedVars=i(i({},this.getVariables()),e.scopedVars),r=[],p=0,c.label=1;case 1:return p<t.targets.length?(m=t.targets[p].data,a=e.range.from,n=e.range.to,o=m.sql.replace("$__timeFilter",m.timeField+" BETWEEN '"+a.format("YYYY-MM-DD HH:mm:ss")+"' AND '"+n.format("YYYY-MM-DD HH:mm:ss")+"'"),u={project:m.project,sql:o},[4,this.doRequest({url:this.url+"/api/query",data:u,method:"POST"})]):[3,4];case 2:for(l=c.sent(),s=l.data.columnMetas.map((function(e){return{text:e.label}})),y=0;y<l.data.results.length;y++)"table"!==t.targets[p].type&&(l.data.results[y][0]?l.data.results[y][0]=parseFloat(l.data.results[y][0]):l.data.results[y][0]=0);r.push({refId:t.targets[p].refId,columns:s,datapoints:l.data.results,target:l.data.columnMetas[0].label}),c.label=3;case 3:return p++,[3,1];case 4:for(f=[],p=0;p<r.length;p++)if(console.log("request.targets[i]: ",t.targets[p]),m=t.targets[p].data,g=m.metricField){for(h=0,y=0;y<r[p].columns.length;y++)if(v=r[p].columns[y].text,g.toLowerCase()===v.toLowerCase()){h=y;break}for(y=0;y<r[p].datapoints.length;y++)b={refId:t.targets[p].refId,columns:r[p].columns,target:r[p].datapoints[y][h]},O="table"===t.targets[p].type?"rows":"datapoints",b[O]=[r[p].datapoints[y]],f.push(b)}else"table"===t.targets[p].type&&(r[p].rows=r[p].datapoints,delete r[p].datapoints),f.push(r[p]);return[2,{data:f}]}}))}))},t.prototype.testDatasource=function(){return this.doRequest({url:this.url,method:"GET"}).then((function(e){return 200===e.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"error",message:"Data source is not working: "+e.message,title:"Error"}}))},t.prototype.metricFindQuery=function(e,t,r){return Promise.resolve(this.mapToTextValue({data:["Auto"]}))},t.prototype.getTagKeys=function(e){var t=this;return new Promise((function(r){t.doRequest({url:t.url+"/tag-keys",method:"POST",data:e}).then((function(e){return r(e.data)}))}))},t.prototype.getTagValues=function(e){var t=this;return new Promise((function(r){t.doRequest({url:t.url+"/tag-values",method:"POST",data:e}).then((function(e){return r(e.data)}))}))},t.prototype.annotationQuery=function(e){var t={annotation:{query:Object(d.getTemplateSrv)().replace(e.annotation.query,{},"glob"),name:e.annotation.name,datasource:e.annotation.datasource,enable:e.annotation.enable,iconColor:e.annotation.iconColor},range:e.range,rangeRaw:e.rangeRaw,variables:this.getVariables()};return this.doRequest({url:this.url+"/annotations",method:"POST",data:t}).then((function(e){return e.data}))},t.prototype.mapToTextValue=function(e){return e.data.map((function(e,t){return e&&e.text&&e.value?{text:e.text,value:e.value}:Object(m.isObject)(e)?{text:e,value:t}:{text:e,value:e}}))},t.prototype.doRequest=function(e){return e.withCredentials=this.withCredentials,e.headers=this.headers,Object(d.getBackendSrv)().datasourceRequest(e)},t.prototype.processTargets=function(e){var t=this;return e.targets=e.targets.filter((function(e){return void 0!==e.target})).map((function(r){return""!==r.data.trim()&&(r.data=JSON.parse(r.data,(function(r,a){return"string"==typeof a?a.replace(Object(d.getTemplateSrv)().regex,(function(r){return t.cleanMatch(r,e)})):a}))),"string"==typeof r.target&&(r.target=Object(d.getTemplateSrv)().replace(r.target.toString(),e.scopedVars,"regex")),r})),e},t.prototype.cleanMatch=function(e,t){var r=Object(d.getTemplateSrv)().replace(e,t.scopedVars,"json");return"string"==typeof r&&'"'===r[0]&&'"'===r[r.length-1]?JSON.parse(r):r},t.prototype.getVariables=function(){var e={};return Object.values(Object(d.getTemplateSrv)().getVariables()).forEach((function(t){if(g.includes(t.type)){if("adhoc"!==t.type){var r=t,a=r.current.value;("$__all"===a||Object(m.isEqual)(a,["$__all"]))&&(a=null===r.allValue||""===r.allValue?r.options.slice(1).map((function(e){return e.value})):r.allValue),e[r.id]={text:r.current.text,value:a}}}else console.warn('Variable of type "'+t.type+'" is not supported')})),e},t}(a.DataSourceApi);!function(e){e.Table="table",e.Timeseries="timeseries"}(p||(p={}));var v=[{label:"Time series",value:p.Timeseries},{label:"Table",value:p.Table}];r.d(t,"plugin",(function(){return b}));var y=function(){function e(){}return e.templateUrl="partials/annotations.editor.html",e}(),b=new a.DataSourcePlugin(h).setAnnotationQueryCtrl(y).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return u.a.createElement(u.a.Fragment,null,u.a.createElement(n.DataSourceHttpSettings,{defaultUrl:"http://localhost:8080",dataSourceConfig:t,showAccessOptions:!0,onChange:r}))})).setQueryEditor((function(e){var t,r,a=e.datasource,o=e.onChange,l=e.onRunQuery,s=e.query,c=f(u.a.useState(null!==(t=Object(m.find)(v,(function(e){return e.value===s.type})))&&void 0!==t?t:v[0]),2),p=c[0],d=c[1],g=f(u.a.useState(),2),h=g[0],y=g[1],b=f(u.a.useState(null!==(r=s.data)&&void 0!==r?r:""),2),O=b[0],w=b[1],S="",x="",T="",E="";if(O){var j=JSON.parse(O);S=j.project,x=j.timeField,T=j.metricField,E=j.sql}function N(e){var t={};O&&(t=JSON.parse(O)),w(JSON.stringify(i(i({},t),e)))}u.a.useEffect((function(){void 0!==p.value&&void 0!==(null==h?void 0:h.value)&&(o(i(i({},s),{data:O,target:h.value,type:p.value})),l())}),[O,p,h]);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"gf-form-inline"},u.a.createElement("div",{className:"gf-form"},u.a.createElement(n.Select,{prefix:"Format As: ",options:v,defaultValue:p,onChange:function(e){d(e)}})),u.a.createElement("div",{className:"gf-form"},u.a.createElement(n.AsyncSelect,{prefix:"Metric: ",loadOptions:function(e){return a.metricFindQuery(e).then((function(e){var t=e.map((function(e){return{label:e.text,value:e.value}}));return y(Object(m.find)(t,(function(e){return e.value===s.target}))),t}),(function(e){throw new Error(e.statusText)}))},defaultOptions:!0,placeholder:"Select metric",allowCustomValue:!0,value:h,onChange:function(e){y(e)}})),u.a.createElement("div",{className:"gf-form-label"},"Project"),u.a.createElement("div",{className:"gf-form"},u.a.createElement("input",{type:"text",className:"gf-form-input",placeholder:"input project name",value:S,onChange:function(e){return N({project:e.currentTarget.value})}})),u.a.createElement("div",{className:"gf-form-label"},"Time Field"),u.a.createElement("div",{className:"gf-form"},u.a.createElement("input",{type:"text",className:"gf-form-input",placeholder:"input time field name",value:x,onChange:function(e){return N({timeField:e.currentTarget.value})}})),u.a.createElement("div",{className:"gf-form-label"},"Metric Field"),u.a.createElement("div",{className:"gf-form"},u.a.createElement("input",{type:"text",className:"gf-form-input",placeholder:"input metric field name",value:T,onChange:function(e){return N({metricField:e.currentTarget.value})}}))),u.a.createElement("div",{className:"gf-form gf-form--alt"},u.a.createElement("div",{className:"gf-form-label"},"SQL"),u.a.createElement("div",{className:"gf-form"},u.a.createElement(n.CodeEditor,{width:"800px",height:"100px",language:"sql",showLineNumbers:!0,showMiniMap:O.length>100,value:E,onBlur:function(e){return N({sql:e})}}))))}))}])}));
//# sourceMappingURL=module.js.map