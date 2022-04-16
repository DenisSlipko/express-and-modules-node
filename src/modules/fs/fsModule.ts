import * as fs from 'fs'

fs.writeFileSync('response.txt', 'some text')

fs.rename('response.txt', 'response2.txt', err => {
  if (err) {
    return console.error(err)
  }
})