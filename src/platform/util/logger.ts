import format from './date_format';

const FMT: string = "[yyyy-MM-dd hh:mm:ss]";

function debug(msg: string) {
    console.log(`${format(new Date(), FMT)}: ${msg}`);
}

export default {debug};