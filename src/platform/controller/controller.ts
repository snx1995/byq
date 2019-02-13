import {ByRequest, ByResponse} from '../http/http';
import { ServerResponse } from 'http';

export interface RouterMap {
    [path: string]: (request: ByRequest, response:ByResponse) => void;
}

export class Controller {
    router: RouterMap;
}