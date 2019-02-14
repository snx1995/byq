import LoggerFactory from './util/logger';
import {Controller, RouterMap} from './controller/Controller';
import controllers from './controller/ControllerRegister';
import {ServerResponse, IncomingMessage} from "http";
import { ByRequest, ByResponse } from './http/http';

const logger = LoggerFactory.newInstance('Dispatcher');

function buildRouterMap(controllers: Controller[]) {
    let map: RouterMap = {};
    let c: Controller;
    for (c of controllers) {
        const router = c.router;
        for (const path in router) {
            if (router.hasOwnProperty(path)) {
                if (!map[path]) map[path] = router[path].bind(c);
                else throw new Error('controller path重定义');
            }
        }
    }
    return map;
}

export default class Dispatcher {
    map: RouterMap;
    constructor() {
        this.map = buildRouterMap(controllers);
        console.log(this.map);
    }

    dispatch(request: IncomingMessage, response: ServerResponse) {
        const req: ByRequest = new ByRequest(request);
        const resp: ByResponse = new ByResponse(response);
        let uri = req.uri;
        logger.debug(uri);
        if (uri.endsWith('.do')) {
            uri = uri.replace(/^(.*)\.do$/, '$1');
            const controller = this.map[uri];
            if (!controller) resp.echo403();
            controller(req, resp);
        } else resp.echo400();
    }
}