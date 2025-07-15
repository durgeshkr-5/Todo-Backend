const express = require('express');
const  cors = require('cors')
require('dotenv').config();
const connectMongoDB = require('./config/connectMongoDb');
const authRouter = require('./routes/auth.routes');
const notesRouter = require("./routes/notes.routes");



const app = express();
const port = process.env.PORT ||8000;

//connect mongodb
connectMongoDB();


//middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json());


//routes
app.use("/auth",authRouter);
app.use("/notes",notesRouter);


//unhandle routes
app.use((req,res) => {
    return res.status(404).json({msg:"404 Not Found!!!"})
})


//server
app.listen(port,() => {
    console.log(`Server is runnig at port : ${port}`);
})