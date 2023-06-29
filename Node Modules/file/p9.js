const fs = require('fs');
const readLine = require('readline');

//read line 
const txt = readLine.createInterface({
    input: fs.createReadStream('./documents/myFile.txt')
})

var li = 0;
txt.on('line', function (data) {
    li++;
    console.log(`line number = ${li} : ${data} `)
})
