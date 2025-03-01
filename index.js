const express = require("express");
const dotenv = require("dotenv");
const connectedToDB = require("./configs/mongo.config");
const app = express();
app.use(express.json());
require("dotenv").config();
connectedToDB();

const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("This is test route");
});

app.listen(PORT,()=>{
    console.log("server Started");
    
})