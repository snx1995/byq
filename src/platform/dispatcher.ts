import LoggerFactory from './util/logger';
import {Controller, RouterMap} from './controller/Controller';
import controllers from './controller/ControllerRegister';
import {ServerResponse, IncomingMessage} from "http";

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

buildRouterMap(controllers);

export default class Dispatcher {
    
    dispatch(request: IncomingMessage, response: ServerResponse) {
        logger.debug('dispatcher called');
    }
}