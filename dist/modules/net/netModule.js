"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const server = net_1.default.createServer();
server.listen({
    host: 'localhost',
    port: 8080
});
server.on('connection', (client) => {
    console.log('Client connected');
    client.write('welcome to the server');
});
