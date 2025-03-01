const mongoose = require("mongoose");

const connectedToDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
};

module.exports = connectedToDB;