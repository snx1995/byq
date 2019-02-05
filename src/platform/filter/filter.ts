
import logger from '../util/logger';
import Dispather from '../dispatcher';

export class FilterChain {
    chain: Filter[];
    index: number;
    dispather: Dispather;
    constructor(chain: Filter[]) {
        this.chain = chain ? chain : [];
        this.index = 0;
    }

    doRequest(request: object, response: object) {
        this.index = 0;
        this.doFilter(request, response);
    }

    doFilter(request: object, response: object) {
        if (!this.dispather) throw new Error('FilterChain 需要先注册dispather!');
        if (this.index < this.chain.length) {
            const filter = this.chain[this.index++];
            filter.doFilter(request, response, this);
        } else this.dispather.dispatch(request, response);
    }

    registerDispatcher(dispatcher: Dispather) {
        this.dispather = dispatcher;
    }

    registerFilter(filter: Filter) {
        this.chain.push(filter);
    }
}

export class Filter {
    constructor(public name: string) {
        this.name = name;
    }
    doFilter(request: object, response: object, filterChain: FilterChain) {
        logger.debug(this.name + ' called');
        filterChain.doFilter(request, response);
    }
}

export class RequestFilter extends Filter {
    constructor() {
        super('RequestFilter');
    }
}


