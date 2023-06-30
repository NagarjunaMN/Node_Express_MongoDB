const { MongoClient } = require('mongodb')
const assert = require('assert')

//url
const url = `mongodb://localhost:27017`
const db_name = `db_mongo_test`

const client = new MongoClient(url);

async function main() {
    await client.connect()
        console.log(`mongodb connected successfully`)
    return `..done`
}

main()
    .then(res => {console.log(res)
    })
    .catch(err => {console.log(err)
    }).finally(() => client.close())










