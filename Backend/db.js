const mongoose = require("mongoose")
const mongoURI = "mongodb://127.0.0.1:27017/notesapp";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,
        console.log("Connected to Mongo with localhost successfully!")
    )
}

module.exports = connectToMongo;