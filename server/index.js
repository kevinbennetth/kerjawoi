require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

// Connecting to the MongoDB Cloud Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Configure App
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Configure Routes
const userRouter = require("./routes/user");
app.use("/api/users", userRouter);

const teamRouter = require("./routes/team");
app.use("/api/teams", teamRouter);

app.get("/", async(req, res)=>{
    res.json({message:"Hello, It's me! I've been wondering if after all these years you would like to meet"})
})

// app.get("/seed", async(req, res)=>{
//     const users = [
//         {name:"Kevin Bennett Haryono", email:'kevinb@gmail.com', password:"kevin"},
//         {name:"Matthew Adrianus Mulyono", email:'matthewa@gmail.com', password:"matthew"},
//         {name:"Ryne Ferdinand", email:'rynef@gmail.com', password:"ryne"},
//     ]
//     const new_users = users.map(user=>new User({...user}));
//     new_users.forEach(user=>user.save());
//     res.status(200).json(new_users);
// })

app.listen(8080, ()=>{
    console.log("Server listening at port 8080");
});