import {ServerResponse, IncomingMessage, createServer} from "http";
import {Filter, RequestFilter, FilterChain} from './platform/filter/filter';
import Dispatcher from './platform/dispatcher';
import LoggerFactory from './platform/util/logger';
import ServerEvent from './platform/event/EventCenter';
import { Server } from "tls";
import { ByResponse } from "./platform/http/http";

const logger = LoggerFactory.newInstance('Server');
const PORT = process.env.npm_package_server_port;
const filterChain = new FilterChain([new Filter('filter1'), new Filter('filter2')]);

initFilters(filterChain);

ServerEvent.on(ServerEvent.SERVER_EVENT, (type: string, response: ByResponse) => {
    logger.debug('listened event at server type = ' + type);
})

createServer((request: IncomingMessage, response: ServerResponse) => {
    // console.log(request.url);
    try {
        filterChain.doRequest(request, response);
    } catch(e) {
        console.log(e);

        logger.error('error here');
        response.writeHead(403);
        response.end();
    }
    // response.end('hello world');

}).listen(PORT);

console.log("server is running");

function initFilters(filterChain: FilterChain):void {
    filterChain.registerDispatcher(new Dispatcher());
    filterChain.registerFilter(new RequestFilter());
}
