define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ConfigEditor = function ConfigEditor(_a) {
  var options = _a.options,
      onOptionsChange = _a.onOptionsChange;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["DataSourceHttpSettings"], {
    defaultUrl: 'http://localhost:8080',
    dataSourceConfig: options,
    showAccessOptions: true,
    onChange: onOptionsChange
  }));
};

/***/ }),

/***/ "./DataSource.ts":
/*!***********************!*\
  !*** ./DataSource.ts ***!
  \***********************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var supportedVariableTypes = ['adhoc', 'constant', 'custom', 'query'];

var DataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(instanceSettings) {
    var _this = _super.call(this, instanceSettings) || this;

    _this.url = instanceSettings.url === undefined ? '' : instanceSettings.url;
    _this.withCredentials = instanceSettings.withCredentials !== undefined;
    _this.headers = {
      'Content-Type': 'application/json'
    };

    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      _this.headers['Authorization'] = instanceSettings.basicAuth;
    }

    return _this;
  }

  DataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
      var request, resultData, i, data, from, to, sql, body, response, columns, j;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            request = this.processTargets(options);

            if (request.targets.length === 0) {
              return [2
              /*return*/
              , Promise.resolve({
                data: []
              })];
            } // @ts-ignore


            request.adhocFilters = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().getAdhocFilters(this.name);
            options.scopedVars = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getVariables()), options.scopedVars);
            resultData = [];
            i = 0;
            _a.label = 1;

          case 1:
            if (!(i < request.targets.length)) return [3
            /*break*/
            , 4];
            data = request.targets[i].data;
            from = options.range.from;
            to = options.range.to;
            sql = data.sql.replace('$__timeFilter', data.timeField + " BETWEEN '" + from.format('YYYY-MM-DD HH:mm:ss') + "' AND '" + to.format('YYYY-MM-DD HH:mm:ss') + "'");
            body = {
              project: data.project,
              sql: sql
            };
            return [4
            /*yield*/
            , this.doRequest({
              url: this.url + "/api/query",
              data: body,
              method: 'POST'
            })];

          case 2:
            response = _a.sent();
            columns = response.data.columnMetas.map(function (col) {
              return {
                text: col.name
              };
            });

            for (j = 0; j < response.data.results.length; j++) {
              if (!!response.data.results[j][0]) {
                response.data.results[j][0] = parseInt(response.data.results[j][0], 10);
              } else {
                response.data.results[j][0] = 0;
              }
            }

            resultData.push({
              refId: request.targets[i].refId,
              columns: columns,
              datapoints: response.data.results,
              target: response.data.columnMetas[0].name
            });
            _a.label = 3;

          case 3:
            i++;
            return [3
            /*break*/
            , 1];

          case 4:
            return [2
            /*return*/
            , {
              data: resultData
            }];
        }
      });
    });
  };

  DataSource.prototype.testDatasource = function () {
    return this.doRequest({
      url: this.url,
      method: 'GET'
    }).then(function (response) {
      if (response.status === 200) {
        return {
          status: 'success',
          message: 'Data source is working',
          title: 'Success'
        };
      }

      return {
        status: 'error',
        message: "Data source is not working: " + response.message,
        title: 'Error'
      };
    });
  };

  DataSource.prototype.metricFindQuery = function (query, options, type) {
    return Promise.resolve(this.mapToTextValue({
      data: ['Auto']
    })); // const interpolated = {
    //   type,
    //   target: getTemplateSrv().replace(query, undefined, 'regex'),
    // };
    // return this.doRequest({
    //   url: `${this.url}/search`,
    //   data: interpolated,
    //   method: 'POST',
    // }).then(this.mapToTextValue);
  };

  DataSource.prototype.getTagKeys = function (options) {
    var _this = this;

    return new Promise(function (resolve) {
      _this.doRequest({
        url: _this.url + "/tag-keys",
        method: 'POST',
        data: options
      }).then(function (result) {
        return resolve(result.data);
      });
    });
  };

  DataSource.prototype.getTagValues = function (options) {
    var _this = this;

    return new Promise(function (resolve) {
      _this.doRequest({
        url: _this.url + "/tag-values",
        method: 'POST',
        data: options
      }).then(function (result) {
        return resolve(result.data);
      });
    });
  };

  DataSource.prototype.annotationQuery = function (options) {
    var query = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().replace(options.annotation.query, {}, 'glob');
    var annotationQuery = {
      annotation: {
        query: query,
        name: options.annotation.name,
        datasource: options.annotation.datasource,
        enable: options.annotation.enable,
        iconColor: options.annotation.iconColor
      },
      range: options.range,
      rangeRaw: options.rangeRaw,
      variables: this.getVariables()
    };
    return this.doRequest({
      url: this.url + "/annotations",
      method: 'POST',
      data: annotationQuery
    }).then(function (result) {
      return result.data;
    });
  };

  DataSource.prototype.mapToTextValue = function (result) {
    return result.data.map(function (d, i) {
      if (d && d.text && d.value) {
        return {
          text: d.text,
          value: d.value
        };
      }

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(d)) {
        return {
          text: d,
          value: i
        };
      }

      return {
        text: d,
        value: d
      };
    });
  };

  DataSource.prototype.doRequest = function (options) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;
    return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().datasourceRequest(options);
  };

  DataSource.prototype.processTargets = function (options) {
    var _this = this;

    options.targets = options.targets.filter(function (target) {
      // remove placeholder targets
      return target.target !== undefined;
    }).map(function (target) {
      if (target.data.trim() !== '') {
        target.data = JSON.parse(target.data, function (key, value) {
          if (typeof value === 'string') {
            return value.replace(Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().regex, function (match) {
              return _this.cleanMatch(match, options);
            });
          }

          return value;
        });
      }

      if (typeof target.target === 'string') {
        target.target = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().replace(target.target.toString(), options.scopedVars, 'regex');
      }

      return target;
    });
    return options;
  };

  DataSource.prototype.cleanMatch = function (match, options) {
    var replacedMatch = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().replace(match, options.scopedVars, 'json');

    if (typeof replacedMatch === 'string' && replacedMatch[0] === '"' && replacedMatch[replacedMatch.length - 1] === '"') {
      return JSON.parse(replacedMatch);
    }

    return replacedMatch;
  };

  DataSource.prototype.getVariables = function () {
    var variables = {};
    Object.values(Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().getVariables()).forEach(function (variable) {
      if (!supportedVariableTypes.includes(variable.type)) {
        console.warn("Variable of type \"" + variable.type + "\" is not supported");
        return;
      }

      if (variable.type === 'adhoc') {
        // These are being added to request.adhocFilters
        return;
      }

      var supportedVariable = variable;
      var variableValue = supportedVariable.current.value;

      if (variableValue === '$__all' || Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(variableValue, ['$__all'])) {
        if (supportedVariable.allValue === null || supportedVariable.allValue === '') {
          variableValue = supportedVariable.options.slice(1).map(function (textValuePair) {
            return textValuePair.value;
          });
        } else {
          variableValue = supportedVariable.allValue;
        }
      }

      variables[supportedVariable.id] = {
        text: supportedVariable.current.text,
        value: variableValue
      };
    });
    return variables;
  };

  return DataSource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]);



/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: QueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditor", function() { return QueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./format.ts");





var formatAsOptions = [{
  label: 'Time series',
  value: _format__WEBPACK_IMPORTED_MODULE_4__["Format"].Timeseries
}, {
  label: 'Table',
  value: _format__WEBPACK_IMPORTED_MODULE_4__["Format"].Table
}];
var QueryEditor = function QueryEditor(_a) {
  var _b, _c;

  var datasource = _a.datasource,
      onChange = _a.onChange,
      onRunQuery = _a.onRunQuery,
      query = _a.query;

  var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.useState((_b = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(formatAsOptions, function (option) {
    return option.value === query.type;
  })) !== null && _b !== void 0 ? _b : formatAsOptions[0]), 2),
      formatAs = _d[0],
      setFormatAs = _d[1];

  var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(), 2),
      metric = _e[0],
      setMetric = _e[1];

  var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.useState((_c = query.data) !== null && _c !== void 0 ? _c : ''), 2),
      data = _f[0],
      setData = _f[1];

  var project = '';
  var timeField = '';
  var sql = '';

  if (!!data) {
    var obj = JSON.parse(data);
    project = obj.project;
    timeField = obj.timeField;
    sql = obj.sql;
  }

  function changeData(changed) {
    var obj = {};

    if (!!data) {
      obj = JSON.parse(data);
    }

    setData(JSON.stringify(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), changed)));
  }

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (formatAs.value === undefined) {
      return;
    }

    if ((metric === null || metric === void 0 ? void 0 : metric.value) === undefined) {
      return;
    }

    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      data: data,
      target: metric.value,
      type: formatAs.value
    }));
    onRunQuery();
  }, [data, formatAs, metric]);

  var loadMetrics = function loadMetrics(searchQuery) {
    return datasource.metricFindQuery(searchQuery).then(function (result) {
      var metrics = result.map(function (value) {
        return {
          label: value.text,
          value: value.value
        };
      });
      setMetric(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(metrics, function (metric) {
        return metric.value === query.target;
      }));
      return metrics;
    }, function (response) {
      throw new Error(response.statusText);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    prefix: "Format As: ",
    options: formatAsOptions,
    defaultValue: formatAs,
    onChange: function onChange(v) {
      setFormatAs(v);
    }
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["AsyncSelect"], {
    prefix: "Metric: ",
    loadOptions: loadMetrics,
    defaultOptions: true,
    placeholder: "Select metric",
    allowCustomValue: true,
    value: metric,
    onChange: function onChange(v) {
      setMetric(v);
    }
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form-label"
  }, "Project"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    className: "gf-form-input",
    placeholder: "input project name",
    value: project,
    onChange: function onChange(e) {
      return changeData({
        project: e.currentTarget.value
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form-label"
  }, "Time Field"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    className: "gf-form-input",
    placeholder: "input time field ame",
    value: timeField,
    onChange: function onChange(e) {
      return changeData({
        timeField: e.currentTarget.value
      });
    }
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form gf-form--alt"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form-label"
  }, "SQL"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["CodeEditor"], {
    width: "800px",
    height: "100px",
    language: "sql",
    showLineNumbers: true,
    showMiniMap: data.length > 100,
    value: sql,
    onBlur: function onBlur(value) {
      return changeData({
        sql: value
      });
    }
  })))); // }
};

/***/ }),

/***/ "./format.ts":
/*!*******************!*\
  !*** ./format.ts ***!
  \*******************/
/*! exports provided: Format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Format", function() { return Format; });
var Format;

(function (Format) {
  Format["Table"] = "table";
  Format["Timeseries"] = "timeseries";
})(Format || (Format = {}));

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSource */ "./DataSource.ts");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");





var GenericAnnotationsQueryCtrl =
/** @class */
function () {
  function GenericAnnotationsQueryCtrl() {}

  GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
  return GenericAnnotationsQueryCtrl;
}();

var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_DataSource__WEBPACK_IMPORTED_MODULE_2__["DataSource"]).setAnnotationQueryCtrl(GenericAnnotationsQueryCtrl).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["ConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["QueryEditor"]);

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map