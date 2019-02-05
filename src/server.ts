import { ServerResponse, ClientRequest } from "http";

const http = require('http');
const PORT = process.env.npm_package_server_port;

http.createServer((request: Request, response: ServerResponse) => {
    console.log("received request", request.method);
    response.end("hello world");
}).listen(PORT);

console.log("server is running");


let o = {};
Object.defineProperty(o, 'test', {
    get() {
        return 1;
    },
    set(x) {
        this.test = x;
    }
})