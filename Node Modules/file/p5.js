const fs = require('fs')

const data = " \n\n Asynchronously append data to a file , creating the file if it foes not exist"
fs.appendFile('./documents/test1.txt',data, function (err) {
    if(err) throw err;
    console.log('append successful')
})
