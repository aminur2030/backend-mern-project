import mongoose from "mongoose";
const employeeSchema=mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true   
  },
    
  phone:Number
})

export const Employee=mongoose.model("Employee",employeeSchema);