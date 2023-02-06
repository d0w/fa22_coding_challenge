const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose")
//const connection = require("./db");
const tasks = require("./routes/tasks.js");

// mongoDB connection
const MONGO_URI = "mongodb+srv://kahro:admin@cluster0.r6uw22m.mongodb.net/?retryWrites=true&w=majority"
const connect = () => {
    mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to DB")
    }).catch((e) => {
        console.log(e)
    })
}

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasks);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    mongoose.set('strictQuery', false);
    connect();
    console.log(`Listening on port ${port}...`);
})
    
