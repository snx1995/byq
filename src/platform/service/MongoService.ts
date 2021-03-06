import {MongoClient, Db, Collection, ObjectId, Logger} from 'mongodb';
import {EventEmitter} from 'events';
import LoggerFactory from '../util/logger';

const URL = 'mongodb://localhost:27017/byq';
const logger = LoggerFactory.newInstance('MDBClient');
interface MDObject {
    md: string
}

class MDBClient {
    mdb: Db;
    collection: Collection;
    ready: boolean;
    event: EventEmitter;

    constructor() {
        this.ready = false;
        this.event = new EventEmitter();
        MongoClient.connect(URL, {useNewUrlParser: true}, (err, db: MongoClient) => {
            if (err) {
                logger.error('error happened here');
                throw err;
            }
            this.mdb = db.db();
            this.collection = this.mdb.collection("markdown");
            this.ready = true;
            this.event.emit('mongo_ready');
        });
    }

    selectById(id: string, callback: (err: any, data: MDObject) => void) {
        const _this = this;
        if (callback) {
            if (_this.ready) query();
            else this.event.on('mongo_ready', query);
        }
        
        function query() {
            try {
                _this.collection.findOne({_id: new ObjectId(id)}).then(data => {
                    callback(null, data);
                }).catch(err => {
                    callback(err, null);
                })
            } catch (err) {
                callback(err, null);
            }
        }
    }
}
let mongoClient: MDBClient;
const DatabaseFactory = {
    mongoClient() {
        if (!mongoClient) mongoClient = new MDBClient();
        return mongoClient;
    }
}

export default DatabaseFactory;