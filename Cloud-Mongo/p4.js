const {client} = require('./dbconnect')
const dbName = 'userdb'

async function main() {
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.updateOne({email:"raju@gmail.com"},{
            $set:{
                name:"Raju Alluri",
                email : "alluriraju@gmail.com"
            }
        }) // to update single user data
        console.log('the output is ',  finResp)
    } finally{
        await client.close()
    }
}

main().catch(err => console.log(err.message))