const mongoose = require("mongoose")
const url = "mongodb+srv://ksingh3154:polpol@098@cluster0.zvgdzep.mongodb.net/?retryWrites=true&w=majority";


const connectToMongo = ()=>{
 
    mongoose.connect(url , 
        {  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }});
}

module.exports = connectToMongo;
