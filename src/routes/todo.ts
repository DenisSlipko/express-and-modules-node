import express, {Request, Response} from 'express'

import TodoController from '../controllers/todo'

const todoRouter = express.Router() 
const todoController = new TodoController() 

todoRouter.get('/todo', async (req: Request, res:Response) => todoController.getAllTodo(req,res))

todoRouter.get('/todo/:id', async (req: Request, res:Response) =>  todoController.getTodo(req,res))

todoRouter.post('/todo', async (req: Request, res:Response) => todoController.postTodo(req,res))

todoRouter.delete("/todo/:id", async (req: Request, res:Response) => todoController.deleteTodo(req, res))

export { todoRouter as TodoRouter }

//app -> ('/', todoRouter) ++ middleware