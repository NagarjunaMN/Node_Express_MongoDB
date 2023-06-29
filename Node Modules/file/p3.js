const fs = require('fs')

const data = "ALl file system operations have synchronous, callback, and promise-based forms , and are accessible using both commonJs syntax and ES6 modules (ESM)";

fs.writeFile('./documents/test1.txt',data, function (err) {
    if(err) throw err;
    console.log('async file write completed')
})