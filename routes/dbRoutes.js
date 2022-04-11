const express = require('express');
const router = express.Router();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cli = require('nodemon/lib/cli');

const uri = "mongodb+srv://Demo:mongoose@cluster0.cnl0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// Create
router.post('/', async (req, res)=> {
    try {
        await client.connect();

        newPool = {};

        const result = await client.db("pooldb").collection("pools").insertOne(newPool);
        console.log("new listing created with id:" + result.insertedId)
        // This notes that the creation was successful.
        return res.status(201).json({id: `${result.insertedId}`, status:"WORKING"})
    } catch (error) {
        console.error(error);
        await client.close();
        return res.status(500).json({id: "", status:"FAILED"})
    }

});

// Read
router.get('/', async (req, res) => {
    // Check for validation param
    let exists = req.query.exists;
    let retrieve = req.query.retrieve;
    console.log(exists);
    if (exists){
        try {
            await client.connect();
            const result = await client.db("pooldb").collection("pools").findOne({_id: ObjectId(`${exists}`)});
            console.log(result);
            console.log(`Existence Confirmed ${result}`);
            return res.json({status: "WORKING"});
        } catch (error) {
            console.log("Existence check failed");
            return res.json({status:"FAILED"});
        }
    } else if (retrieve){
        try {
            await client.connect();
            const result = await client.db("pooldb").collection("pools").findOne({_id: ObjectId(`${retrieve}`)});
            console.log(result);
            console.log(`Retrieval Confirmed`);
            return res.json(result);
        } catch (error) {
            console.log("Retrieval failed");
            return res.json({status:"FAILED"});
        }
    }

});

// Update
router.patch('/', async (req, res)=>{
    // req.body.property
    try {
        await client.connect();

        const result = await client.db("pooldb").collection("pools").updateOne({_id: ObjectId(req.body._id)},{$set:{buyer: req.body.buyer, seller: req.body.seller, price: req.body.price}});
        if (result.acknowledged == true){
            // This notes that the creation was successful.
            console.log(`poolPrice: ${req.body.price}`) 
            console.log("Update Complete on pool")
        }
        return res.status(201).json({id: `${result.insertedId}`, status:"WORKING"})
    } catch (error) {
        console.error(error);
        await client.close();
        return res.status(500).json({id: "", status:"FAILED"})
    }
});

// Delete
router.delete('/', async (req, res)=>{

});

module.exports = router;
