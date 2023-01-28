const Quiz=require("../model/quizModel")

const postQuiz=async(req,res)=>{
    const {category,type,difficulty,question,correct_answer,incorrect_answers}=req.body
    if(!category||!type||!difficulty||!question||!correct_answer||!incorrect_answers){
        res.status(400).json({message:"Please fill in all the details",status:"400"})
    }
    const quiz=await Quiz.create({
        category,type,difficulty,question,correct_answer,incorrect_answers
         
         })
        
         if(quiz){
           const{_id,category,type,difficulty,question,correct_answer,incorrect_answers}=quiz
           res.status(201).json({
               _id,category,type,difficulty,question,correct_answer,incorrect_answers
               })
   
         }else{
           res.status(400).json({message:"Invalid quiz data",status:"400"})
         
         }
}

module.exports={postQuiz}