import LoggerFactory from '../../util/logger';
import {Controller} from '../Controller';

const logger = LoggerFactory.newInstance('MDController');
export default class MDController extends Controller {
    constructor() {
        super();
        this.router = {
            '/article/getArticle': this.getBlog,
        }
    }

    getBlog(params: object): string {
        logger.debug('')
        return '';
    }
}