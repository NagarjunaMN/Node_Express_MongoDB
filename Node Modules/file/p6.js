const fs = require('fs')

//sync append
const data = " \n\n Asynchronously append data to a file , creating the file if it foes not exist"
fs.appendFileSync('./documents/test2.txt',data)

console.log('append successful')
