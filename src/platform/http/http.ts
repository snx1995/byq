import {IncomingMessage, ServerResponse} from 'http';
import LoggerFactory from '../util/logger';

export class ByRequest {
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
                const [k, v] = e.split('=');
                if (k.endsWith('[]')) {
                    if (_this.parameterMap[k]) _this.parameterMap[k].push(v);
                    else _this.parameterMap[k] = [v];
                } else _this.parameterMap[k] = v;
            })
        }
    }

    getParameter(key: string) {
        return this.parameterMap[key];
    }
}

export class ByResponse {

    constructor(public response: ServerResponse) {

    }

    echoJSON(data: any, status = 200): void {
        const resp = this.response;
        resp.setHeader('Content-Type', 'application/json;charset=utf-8;');
        resp.writeHead(status);
        resp.end(JSON.stringify(data));
    }
}