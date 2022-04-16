import * as net from 'net'

const client = net.createConnection({
    port: 8080
})

client.on('data', (data) => {
    console.log(`Message is received from the server ${data}`)
})