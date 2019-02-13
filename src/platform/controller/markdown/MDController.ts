import LoggerFactory from '../../util/logger';
import {Controller} from '../Controller';
import { ByRequest, ByResponse } from '../../http/http';
import DatabaseFactory from '../../service/MongoService';
import { ServerResponse } from 'http';

const mongo = DatabaseFactory.mongoClient();
const logger = LoggerFactory.newInstance('MDController');
export default class MDController extends Controller {
    constructor() {
        super();
        this.router = {
            '/article/getArticle': this.getBlog,
            '/article/getArticleById': this.getArticleById,            
        }
    }

    getBlog(request: ByRequest, response: ByResponse): string {
        logger.debug('')
        return '';
    }

    getArticleById(request: ByRequest, response: ByResponse):void {
        const id = request.getParameter('id');
        mongo.selectById(id, (err, data) => {
            if (err) throw err;
            response.echoJSON(data);
        })
    }
}