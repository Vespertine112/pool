const res = require('express/lib/response');
const { MongoClient, ServerApiVersion } = require('mongodb');




async function main() {
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    try {
        await client.connect();

        // await listDatabases(client);

        // await createListing(client, {
        //     id: 123,
        //     price: 400,
        //     buyer: "frank",
        //     seller: "tom",
        //     key: 1382190382190
        // });

        await findById(client, 123);

    } catch (error) {
        console.error(error);
    } finally{
        await client.close();
    }

}


main().catch(console.error);

async function findById(client, id){
    const result = await client.db("pooldb").collection("pools").findOne({id: id});

    if (result) {
        console.log(`Found a listing in the collection with the id ${id}`);
    } else {
        console.log("Found no matching object")
    }
}

async function createListing(client, newListing){
    const result = await client.db("pooldb").collection("pools").insertOne(newListing);
    console.log("new listing created with id:" + result.insertedId)
}

async function createMultipleListings(client, newListings){
    const results = await client.db("pooldb").collection("pools").insertMany(newListings);
    console.log(`${result.insertedCount} # new listings created`)
    console.log(results.insertedIds);
}

async function listDatabases(client) {
    const dblist = await client.db().admin().listDatabases();

    console.log("Databases:")
    dblist.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}