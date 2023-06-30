const {MongoClient , ServerApiVersion} = require('mongodb')

const uri = "mongodb+srv://Nagarjuna_246:Mondrunag_1996@cluster0.isjxzp6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi : {
        version : ServerApiVersion.v1,
        deprecationErrors : true,
        strict : true
    }
})

module.exports = {client}

// async function main() {
//     try{
//         await client.connect()
//         console.log('db connected')
//     } finally {
//         await client.close()
//     }
// }

// main().catch(err => console.log(err.message))