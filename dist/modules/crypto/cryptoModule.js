"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const config_1 = require("../../config");
const cryptoFunction = (password) => {
    return crypto_1.default.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
};
const outputCrypto = cryptoFunction(config_1.PASSWORD);
console.log(outputCrypto);
