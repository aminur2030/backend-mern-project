import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  
  name:{
    type:String,
    minLength:[3,"minimum length would be at least 3 charactres."],
    maxLength:[32,"maximum length would be  32 charactres."]    
  },
  email:String,
  phone:Number,
  password:{
    type:String,
    minLength:[8,"minimum length of password would be at least 8 charactres."],
    //maxLength:[32,"maximum length of password would be  32 charactres."]    
  },
})
export const User=mongoose.model("User",userSchema)