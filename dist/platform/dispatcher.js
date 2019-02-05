"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./util/logger");
var Dispatcher = (function () {
    function Dispatcher() {
    }
    Dispatcher.prototype.dispatch = function (request, response) {
        logger_1.default.debug('dispatcher called');
    };
    return Dispatcher;
}());
exports.default = Dispatcher;
//# sourceMappingURL=dispatcher.js.map