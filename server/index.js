require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

// Connecting to the MongoDB Cloud Database
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to database'));

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get("/", async(req, res)=>{
    res.json({message:"Hello, It's me! I've been wondering if after all these years you would like to meet"})
})

app.listen(8080, ()=>{
    console.log("Server listening at port 8080");
});