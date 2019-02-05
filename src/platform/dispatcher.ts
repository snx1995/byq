import logger from './util/logger';

export default class Dispatcher {

    dispatch(request: object, response: object) {
        logger.debug('dispatcher called');
    }
}