import express, { Request, Response } from 'express'
import http from 'http'
import { Server, Socket } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/socket', (req: Request, res: Response ) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket: Socket) => {
  console.log('Connection established')
  socket.on('chat message', (message: string) => {
    console.log(message);
    io.emit('chat message', message);
  })
})

server.listen(8080, () => {
  console.log('listening on *:8080')
})