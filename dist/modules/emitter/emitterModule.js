"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const eventEmitter = new events_1.default.EventEmitter();
const listner1 = function listner1() {
    console.log('listner1 executed.');
};
const listner2 = function listner2() {
    console.log('listner2 executed.');
};
eventEmitter.addListener('connection', listner1);
eventEmitter.on('connection', listner2);
let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
console.log("Program Ended.");
