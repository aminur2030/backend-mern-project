import mongoose from "mongoose";
const taskSchema=new mongoose.Schema({
  
  title:{
    type:String,
    require:[true,"Title must be required."],
    minLength:[4,"Minimum length of title would be at least 4 charactres."],    
  },
    description:{
    type:String,
    require:[true,"Description must be required."],
    minLength:[10,"Minimum length of description would be at least 10 charactres."],    
  },
  createdBy:{
    type:mongoose.Schema.ObjectId
  },
  
})
export const Task=mongoose.model("Task",taskSchema)