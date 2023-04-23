const connectToMongo = require("./db");
const uri = "mongodb+srv://ksingh3154:polpol@098@cluster0.zvgdzep.mongodb.net/notesapp"
//connecting to database
const start = async () => {
    try {
        await connectToMongo(uri);
        app.listen(5000, () => console.log(`Server is listening on port 5000...`) );
    } catch (error) {
        console.log(error);
    }
};
start();

const cors = require('cors');
const express = require("express");
const app = express();

app.use(cors());
const port = 5000;

app.use(express.json())


app.use("/api/auth", require("./routes/auth"));
 app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
