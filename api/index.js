import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose";
import cors from "cors"
import  cookieParser from "cookie-parser"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import centerRoute from "./routes/center.js"

const app = express()
dotenv.config();


//connect to the monggose
const connect= ()=>{
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("db connection succesful")
    })
    .catch((err)=>{console.log(err)})
}    

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB Disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB Connected");
})



// middle ware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// // routes 
app.use("/api/auth", authRoute)
app.use("/api/user",userRoute)
app.use("/api/center",centerRoute)


// handling the error
app.use((error, req, res, next)=>{
    const errorStatus = error.status || 500
    const errorMessage = error.message || "somthing went wrong"
    console.log("we send an error")

    return res.status(500).json({
        success: false,
        status:errorStatus,
        message:errorMessage
    })
})




app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})