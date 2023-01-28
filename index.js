const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv").config()
const connect=require("./config/db")
const quizRouter=require("./routes/quizRoute")
const app=express()
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/",quizRouter)
app.listen(PORT,async()=>{
    await connect()
    console.log("listening on port"+" "+PORT)
})