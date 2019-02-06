"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./platform/filter/filter");
var dispatcher_1 = require("./platform/dispatcher");
var http = require('http');
var PORT = process.env.npm_package_server_port;
var filterChain = new filter_1.FilterChain([new filter_1.Filter('filter1'), new filter_1.Filter('filter2')]);
initFilters(filterChain);
http.createServer(function (request, response) {
    filterChain.doRequest(request, response);
}).listen(PORT);
console.log("server is running");
function initFilters(filterChain) {
    filterChain.registerDispatcher(new dispatcher_1.default());
    filterChain.registerFilter(new filter_1.RequestFilter());
}
//# sourceMappingURL=server.js.map