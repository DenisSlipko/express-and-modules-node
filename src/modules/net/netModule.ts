import net from 'net'

const server = net.createServer()

server.listen({
    host: 'localhost',
    port: 8080
})

server.on('connection', (client) => {
    console.log('Client connected')
    client.write('welcome to the server')
})