import {ServerResponse, IncomingMessage, createServer} from "http";
import {Filter, RequestFilter, FilterChain} from './platform/filter/filter';
import DatabaseFactory from './platform/service/MongoService';
import Dispatcher from './platform/dispatcher';
import LoggerFactory from './platform/util/logger';

const logger = LoggerFactory.newInstance('Server');
const PORT = process.env.npm_package_server_port;
const dbClient = DatabaseFactory.mongoClient();
const filterChain = new FilterChain([new Filter('filter1'), new Filter('filter2')]);

initFilters(filterChain);

dbClient.selectById('5c626fbd88183c1b742f6454', (err, data) => {
    if (err) throw err;
    console.log(data);
})

createServer((request: IncomingMessage, response: ServerResponse) => {
    // console.log(request.url);
    // filterChain.doRequest(request, response);
    // response.end('hello world');
    
    
}).listen(PORT);

console.log("server is running");

function initFilters(filterChain: FilterChain):void {
    filterChain.registerDispatcher(new Dispatcher());
    filterChain.registerFilter(new RequestFilter());
}
