"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../util/logger");
var FilterChain = (function () {
    function FilterChain(chain) {
        this.chain = chain ? chain : [];
        this.index = 0;
    }
    FilterChain.prototype.doRequest = function (request, response) {
        this.index = 0;
        this.doFilter(request, response);
    };
    FilterChain.prototype.doFilter = function (request, response) {
        if (!this.dispather)
            throw new Error('FilterChain 需要先注册dispather!');
        if (this.index < this.chain.length) {
            var filter = this.chain[this.index++];
            filter.doFilter(request, response, this);
        }
        else
            this.dispather.dispatch(request, response);
    };
    FilterChain.prototype.registerDispatcher = function (dispatcher) {
        this.dispather = dispatcher;
    };
    FilterChain.prototype.registerFilter = function (filter) {
        this.chain.push(filter);
    };
    return FilterChain;
}());
exports.FilterChain = FilterChain;
var Filter = (function () {
    function Filter(name) {
        this.name = name;
        this.name = name;
    }
    Filter.prototype.doFilter = function (request, response, filterChain) {
        logger_1.default.debug(this.name + ' called');
        filterChain.doFilter(request, response);
    };
    return Filter;
}());
exports.Filter = Filter;
var RequestFilter = (function (_super) {
    __extends(RequestFilter, _super);
    function RequestFilter() {
        return _super.call(this, 'RequestFilter') || this;
    }
    return RequestFilter;
}(Filter));
exports.RequestFilter = RequestFilter;
//# sourceMappingURL=filter.js.map