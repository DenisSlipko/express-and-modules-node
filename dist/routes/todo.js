"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("../controllers/todo"));
const todoRouter = express_1.default.Router();
exports.TodoRouter = todoRouter;
const todoController = new todo_1.default();
todoRouter.get('/todo', async (req, res) => todoController.getAllTodo(req, res));
todoRouter.get('/todo/:id', async (req, res) => todoController.getTodo(req, res));
todoRouter.post('/todo', async (req, res) => todoController.postTodo(req, res));
todoRouter.delete("/todo/:id", async (req, res) => todoController.deleteTodo(req, res));
//app -> ('/', todoRouter) ++ middleware
