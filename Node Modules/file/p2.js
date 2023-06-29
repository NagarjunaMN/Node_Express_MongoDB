const fs = require('fs')

//sync read
const data = fs.readFileSync('./documents/myFile.txt',)

console.log('sync read = ',data) 
console.log('string = ',data.toString()) 
