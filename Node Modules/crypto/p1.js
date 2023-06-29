const crypto = require('crypto')

//createhash - we can only encrypt it not decrypt , used for comparison
const hash = crypto.createHash('sha256') // sha = secured hash algorithm

let input = "Hi this is my test message"

let data = hash.update(input).digest('hex') //base64, base64url , binary , hex

console.log('data sha(256) = ',data)