"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var PORT = process.env.npm_package_server_port;
http.createServer(function (request, response) {
    console.log("received request", request.method);
    response.end("hello world");
}).listen(PORT);
console.log("server is running");
var o = {};
Object.defineProperty(o, 'test', {
    get: function () {
        return 1;
    },
    set: function (x) {
        this.test = x;
    }
});
//# sourceMappingURL=server.js.map