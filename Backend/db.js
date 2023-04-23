const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://ksingh3154:polpol@098@cluster0.zvgdzep.mongodb.net/test";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,
        console.log("Connected to Mongo with localhost successfully!")
    )
}

module.exports = connectToMongo;
