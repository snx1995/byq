import {IncomingMessage, ServerResponse} from 'http';
import LoggerFactory from '../util/logger';

export class Request {
    parameterMap: {[key: string]: any};
    uri: string;
    constructor(public incomingMessage: IncomingMessage) {
        const _this = this;
        _this.parameterMap = {};
        const url = incomingMessage.url;
        let urlSplit = url.split('?');
        _this.uri = urlSplit[0].substring(urlSplit[0].indexOf('/'));
        const query = urlSplit[1];
        if (query) {
            query.split('&').forEach(e => {
                const q = e.split('=');
                _this.parameterMap[q[0]] = q[1];
            })
        }
        console.log(_this);
    }
    
}