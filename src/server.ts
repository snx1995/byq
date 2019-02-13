import {ServerResponse, IncomingMessage, createServer} from "http";
import {Filter, RequestFilter, FilterChain} from './platform/filter/filter';
import Dispatcher from './platform/dispatcher';
import LoggerFactory from './platform/util/logger';

const logger = LoggerFactory.newInstance('Server');
const PORT = process.env.npm_package_server_port;
const filterChain = new FilterChain([new Filter('filter1'), new Filter('filter2')]);

initFilters(filterChain);

createServer((request: IncomingMessage, response: ServerResponse) => {
    // console.log(request.url);
    try {
        filterChain.doRequest(request, response);
    } catch(e) {
        // console.log(e);
        response.writeHead(404);
        response.end();
    }
    // response.end('hello world');

}).listen(PORT);

console.log("server is running");

function initFilters(filterChain: FilterChain):void {
    filterChain.registerDispatcher(new Dispatcher());
    filterChain.registerFilter(new RequestFilter());
}
