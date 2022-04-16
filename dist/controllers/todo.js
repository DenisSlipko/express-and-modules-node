"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../models/todo"));
class TodoController {
    constructor() {
        this.getAllTodo = async (req, res) => {
            try {
                const todo = await todo_1.default.find();
                return res.status(200).send(todo);
            }
            catch (_a) {
                res.status(404);
                res.send({ error: 'Todos doesnt exist!' });
            }
        };
        this.getTodo = async (req, res) => {
            try {
                const todo = await todo_1.default.findOne({ _id: req.params.id });
                return res.status(200).send(todo);
            }
            catch (_a) {
                res.status(404);
                res.send({ error: 'Todo doesnt exist!' });
            }
        };
        this.postTodo = async (req, res) => {
            const { title, description } = req.body;
            try {
                const todo = await todo_1.default.create({ title, description });
                return res.status(201).send(todo);
            }
            catch (_a) {
                res.status(404);
                res.send({ error: 'Todo cant create!' });
            }
        };
        this.deleteTodo = async (req, res) => {
            try {
                await todo_1.default.deleteOne({ _id: req.params.id });
                return res.status(204).send();
            }
            catch (_a) {
                res.status(404);
                res.send({ error: 'Todo doesnt exist!' });
            }
        };
    }
}
exports.default = TodoController;
