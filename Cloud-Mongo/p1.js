const {client} = require('./dbconnect')
const dbName = 'userdb'

let data = [
    {
        name : "Sita",
        email : "sita@gmail.com"
    },
    {
        name : "Rama",
        email : "rama@gmail.com"
    },
    {
        name : "Raju",
        email : "raju@gmail.com"
    }
];

async function main() {
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const insResp = await collection.insertMany(data) // insertMany => upload multiple data to db
        console.log('users data inserted successfully')
    } finally{
        await client.close()
    }
}

main().catch(err => console.log(err.message))