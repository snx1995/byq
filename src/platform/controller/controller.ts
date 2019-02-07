export interface RouterMap {
    [path: string]: (params: object) => string;
}

export class Controller {
    router: RouterMap;
}