const mongoose = require("mongoose")
const url = "mongodb+srv://ksingh3154:polpol@098@cluster0.zvgdzep.mongodb.net/?retryWrites=true&w=majority";


const connectToMongo = ()=>{
  mongoose.set("strictQuery", false);  //for removing deprecation warning
    mongoose.connect(url , 
        { useNewUrlParser: true, useUnifiedTopology: true },
        ()=>{  console.log(`Connected with database Successfuly`); })
}

module.exports = connectToMongo;
