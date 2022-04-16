"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const file = fs_1.default.createReadStream("./response.txt");
const server = http_1.default.createServer((request, response) => {
    file.pipe(response);
});
server.listen(8080, 'localhost');
