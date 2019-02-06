interface RouterMap {
    path: string;
    method: string;
    child?: RouterMap;
}

export default class Controller {
    router: RouterMap;
}