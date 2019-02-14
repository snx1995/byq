import {EventEmitter} from 'events';

const eventEmitter = new EventEmitter();

export default {
    'SERVER_ERROR': 'server-error',
    'NOT_FOUND': 'not-found',
    'FORBIDDEN': 'forbidden',
    'SERVER_EVENT': 'server_event',
    on(event: string | symbol, listener: (...args: any[]) => void) {
        eventEmitter.on(event, listener);
    },
    emit(event: string | symbol, ...args: any[]) {
        eventEmitter.emit(event, ...args);
    }
}