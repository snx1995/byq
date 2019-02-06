import {ServerResponse, ClientRequest} from "http";
import {Filter, RequestFilter, FilterChain} from './platform/filter/filter';
import Dispatcher from './platform/dispatcher';

const http = require('http');
const PORT = process.env.npm_package_server_port;

const filterChain = new FilterChain([new Filter('filter1'), new Filter('filter2')]);

initFilters(filterChain);


http.createServer((request: Request, response: ServerResponse) => {
    filterChain.doRequest(request, response);
}).listen(PORT);

console.log("server is running");

function initFilters(filterChain: FilterChain):void {
    filterChain.registerDispatcher(new Dispatcher());
    filterChain.registerFilter(new RequestFilter());
}
