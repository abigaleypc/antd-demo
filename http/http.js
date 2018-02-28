"use strict";
exports.__esModule = true;
// import axios, { AxiosRequestConfig } from 'axios';
var url_1 = require("url");
var querystring_1 = require("querystring");
var ajax_1 = require("rxjs/observable/dom/ajax");
var operators_1 = require("rxjs/operators");
// 创建一个默认的Ajax配置
var ajaxConfig = {
    timeout: 15000,
    withCredentials: true
};
var ajaxHeader = {
    headers: { 'Content-Type': 'application/json' }
};
/**
 * 创建一个HTTP AJAX 请求
 *
 * @export
 * @template DATA - 返回的数据类型
 * @param {Url} requestURL - 符合 URL 规范的地址
 * @param {AjaxRequest} config - axios request config
 * @returns
 */
function createAjax(requestURL, config) {
    var ajaxSetting = Object.assign({}, ajaxConfig, ajaxHeader, config, {
        url: url_1.format(requestURL)
    });
    return ajax_1.ajax(ajaxSetting).pipe(operators_1.map(function (res) { return ({
        data: res.response,
        status: res.status,
        config: res.request,
        raw: res.responseText,
        headers: res.request.headers
    }); }));
}
exports.createAjax = createAjax;
/**
 *  创建一个HTTP GET 请求
 *
 * @export
 * @template T - 返回数据类型
 * @template P - 参数类型
 * @param {Url} requestURL - 符合 URL 规范的地址
 * @param {T} [params={} as T] - Query 参数，自动转换成 { foo: 1 } 为 &foo=1
 * @param {AjaxRequest} [config={}] - axios request config
 * @returns
 */
function GET(requestURL, params, config) {
    if (params === void 0) { params = {}; }
    if (config === void 0) { config = {}; }
    requestURL = Object.assign({}, requestURL, { search: querystring_1.stringify(params) });
    return createAjax(requestURL, Object.assign({}, config, { method: 'GET' }));
}
exports.GET = GET;
/**
 * 创建一个HTTP POST 请求
 *
 * @export
 * @template T - 返回数据类型
 * @template P - 参数类型
 * @param {Url} requestURL - 符合 URL 规范的地址
 * @param {T} data - POST 请求的数据
 * @param {AjaxRequest} [config={}] - axios request config
 * @returns
 */
function POST(requestURL, data, config) {
    if (config === void 0) { config = {}; }
    return createAjax(requestURL, Object.assign({}, config, { method: 'POST', body: data }));
}
exports.POST = POST;
/**
 * 创建一个HTTP PUT 请求
 *
 * @export
 * @template T - 返回数据类型
 * @template P - 参数类型
 * @param {Url} requestURL - 符合 URL 规范的地址
 * @param {T} data - POST 请求的数据
 * @param {AjaxRequest} [config={}] - axios request config
 * @returns
 */
function PUT(requestURL, data, config) {
    if (config === void 0) { config = {}; }
    return createAjax(requestURL, Object.assign({}, config, { method: 'PUT', body: data }));
}
exports.PUT = PUT;
/**
 * 创建一个HTTP DELETE 请求
 *
 * @export
 * @template T
 * @param {Url} requestURL - 符合 URL 规范的地址
 * @param {T} [params={} as T] - Query 参数，自动转换成 { foo: 1 } 为 &foo=1
 * @param {AjaxRequest} [config={}] - axios request config
 * @returns
 */
function DELETE(requestURL, params, config) {
    if (params === void 0) { params = {}; }
    if (config === void 0) { config = {}; }
    return createAjax(requestURL, Object.assign({}, config, { method: 'DELETE', body: params }));
}
exports.DELETE = DELETE;
//# sourceMappingURL=index.js.map
