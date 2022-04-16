"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("./todo");
const appRouter = express_1.default.Router();
appRouter.use('/api', todo_1.TodoRouter);
exports.default = appRouter;
