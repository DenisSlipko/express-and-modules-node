import http from 'http'

const server = http.createServer(
    (request, response) => {
        response.writeHead(200, {'Connect-Type': 'text/html'} )
        response.end('<h1>Hello world</h1>')
    }   
)

server.listen(8080, 'localhost')