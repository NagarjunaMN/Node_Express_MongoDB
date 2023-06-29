const zlib = require('zlib')
const fs = require('fs')

let gzib = zlib.createGzip()

let read = fs.createReadStream('myFile.txt')
let write = fs.createWriteStream('test.gz')

read.pipe(gzib).pipe(write)

console.log('G zib generated')