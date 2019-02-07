import format from './date_format';

const FMT: string = "[yyyy-MM-dd hh:mm:ss]";

const LoggerFactory = {
    newInstance(name: string):Logger {
        return new Logger(name);
    },
    defaultLogger():Logger {
        return new Logger('default');
    }
}

class Logger {
    constructor(public name: string) {}
    debug(msg: string) {
        console.log(`${format(new Date(), FMT)} [DEBUG][${this.name}]: ${msg}`)
    }
    error(msg: string) {
        console.error(`${format(new Date(), FMT)} [ERROR][${this.name}]: ${msg}`)
    }
    warn(msg: string) {
        console.warn(`${format(new Date(), FMT)} [WARN][${this.name}]: ${msg}`)
    }
}


export default LoggerFactory;