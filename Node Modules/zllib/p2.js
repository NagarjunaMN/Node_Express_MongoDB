const zlib =  require('zlib')
const fs = require('fs')


let gzib = zlib.createUnzip()

let read = fs.createReadStream('test.gz')
let write = fs.createWriteStream('output.txt')

read.pipe(gzib).pipe(write)

console.log('Un zib generated')
