const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://ksingh3154:polpol@098@cluster0.zvgdzep.mongodb.net/?retryWrites=true&w=majority";


const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }}
    )
}

module.exports = connectToMongo;
