import { IncomingMessage } from 'http'
import https from 'https'

https.get('https://encrypted.google.com/', (res: IncomingMessage) => {
  console.log('statusCode:', res.statusCode)
  console.log('headers:', res.headers)

  res.on('data', (data) => {
    console.log(data)
    process.stdout.write(data)
  })

}).on('error', (error: string) => {
  console.error(error)
})