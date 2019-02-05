"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_format_1 = require("./date_format");
var FMT = "[yyyy-MM-dd hh:mm:ss]";
function debug(msg) {
    console.log(date_format_1.default(new Date(), FMT) + ": " + msg);
}
exports.default = { debug: debug };
//# sourceMappingURL=logger.js.map