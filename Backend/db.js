const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://ksingh3154:<Karandeep@22>@cluster0.zvgdzep.mongodb.net/test";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,
        console.log("Connected to Mongo with localhost successfully!")
    )
}

module.exports = connectToMongo;