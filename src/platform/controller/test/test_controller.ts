import Controller from '../controller';

export class TestController extends Controller {
    constructor() {
        super();
        this.router = {
            path: "/test",
            method: "test",
            child: {
                path: "test1",
                method: "test",
            }
        }
    }

    test(params: object): string {
        
        return '';
    }
}