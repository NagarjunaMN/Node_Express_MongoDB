const http = require('http')
const fs = require('fs')
const port = 3200

http.createServer((req,res) => {
    const fstream = fs.createReadStream('./content/sub/big.txt','utf-8')
    fstream.on('open',() => {
        fstream.pipe(res)
    })

    fstream.on('error',(err) => {
        res.end(err)
    })
}).listen(port)

console.log(`server is started running @ http://localhost:${port}`)
