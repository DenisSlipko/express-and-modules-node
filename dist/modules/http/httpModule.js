"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((request, response) => {
    response.writeHead(200, { 'Connect-Type': 'text/html' });
    response.end('<h1>Hello world</h1>');
});
server.listen(8080, 'localhost');
