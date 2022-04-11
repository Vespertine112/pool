require('dotenv').config();

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

let mongopass = process.env.MONGOPASS;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


const dbRouter = require('./routes/dbRoutes');
app.use('/dbManage/', dbRouter);


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
})