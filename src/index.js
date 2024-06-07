//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/connect.js";

dotenv.config({path: './env'})

connectDB().then(()=>{
    app.listen(8000,()=>{
        console.log("server is running on port ",8000)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed ",err)
})