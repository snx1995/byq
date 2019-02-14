import LoggerFactory from '../../util/logger';
import {Controller} from '../Controller';
import ServerEvent from '../../event/EventCenter';



const logger = LoggerFactory.newInstance('TestController');

export default class TestController extends Controller {
    constructor() {
        super();
        this.router = {
            '/test/test1': this.test1,
        }
    }

    test(params: object): string {
        logger.debug('method test called');
        return '';
    }

    test1(params: object): string {
        logger.debug('method test1 called');
        return '';
    }

    test2(params: object): string {
        logger.debug('method test2 called')
        return '';
    }

    test3(params: object): string {
        logger.debug('method test3 called')
        return '';
    }

    test4(params: object): string {
        logger.debug('method test4 called')
        return '';
    }
}