const express = require('express');
const router = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Demo:mongoose@cluster0.cnl0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// Create
router.post('/', async (req, res)=> {
    // req.body.property

    try {
        await client.connect();

        newPool = {};

        const result = await client.db("pooldb").collection("pools").insertOne(newPool);
        console.log("new listing created with id:" + result.insertedId)
        return res.status(201).json({id: `${result.insertedId}`})
    } catch (error) {
        console.error(error);
        await client.close();
        return res.status(500).json({id: "FAILED"})
    }

    // This notes that the creation was successful.

});

// Read
router.get('/', async (req, res) => {
    res.send('hello world');
});

// Update
router.patch('/', async (req, res)=>{

});

// Delete
router.delete('/', async (req, res)=>{

});

module.exports = router;
