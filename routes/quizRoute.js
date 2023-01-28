const express=require("express")
const { postQuiz } = require("../controller/quizController")
const router=express.Router()

router.post("/postquiz",postQuiz)
module.exports=router