import { Request, Response } from 'express'

import Todo from '../models/todo'

export default class TodoController {
    getAllTodo = async (req: Request, res: Response) => {
        try {
            const todo = await Todo.find()

            return res.status(200).send(todo)
        } catch {
            res.status(404)
            res.send({ error: 'Todos doesnt exist!' })
        }
    }
    
    getTodo = async (req: Request, res: Response) => {
        try {
            const todo = await Todo.findOne({ _id: req.params.id })

            return res.status(200).send(todo)
        } catch {
            res.status(404)
            res.send({ error: 'Todo doesnt exist!' })
        }
      }
    
    postTodo = async (req: Request, res: Response) => {
        const { title, description } = req.body
        try {
            const todo = await Todo.create({ title, description })

            return res.status(201).send(todo)
        } catch {
            res.status(404)
            res.send({ error: 'Todo cant create!' })
        }
    }
    
    deleteTodo = async (req: Request, res: Response) => {
        try {
            await Todo.deleteOne({ _id: req.params.id })
            
            return res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: 'Todo doesnt exist!' })
        }
    }
}