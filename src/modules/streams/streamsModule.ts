import fs from "fs"
import http from 'http'

const file = fs.createReadStream("./response.txt")

const server = http.createServer(
    (request, response) => {
       file.pipe(response)
    }   
)

server.listen(8080, 'localhost')