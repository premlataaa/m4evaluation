const app = require("../index");
const dotenv = require("dotenv");
require("dotenv").config();
const request = require("superjest");
const mongoose = require("mongoose"
);

beforeAll(async()=>{
    await mongoose.connect(Process.env.MONGO_URL);
})

