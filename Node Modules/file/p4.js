const fs = require('fs')

const data = "ALl file system operations have synchronous, callback, and promise-based forms , and are accessible using both commonJs syntax and ES6 modules (ESM)";

fs.writeFileSync('./documents/test2.txt',data)

console.log('sync file write completed')
