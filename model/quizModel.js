const mongoose=require("mongoose")

const quizSchema=mongoose.Schema({
  category:{  type:String,
require:true},
type:{  type:String,
  require:true},
 difficulty:{  type:String,
    require:true},
   question:{  type:String,
      require:true},
      correct_answer:{  type:String,
        require:true},
        incorrect_answers:{type:Array,require:true}
})

const Quiz=mongoose.model("quiz",quizSchema)

module.exports=Quiz