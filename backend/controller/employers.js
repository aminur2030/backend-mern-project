//create,read,update,delete (CRUD);
import {Employee} from "../models/employeeSchema.js"
//post
export const addEmployee=async(req,res,next)=>{
  const{name,email,phone}=req.body
  if(!name || !email || !phone){
    return next(res.status(400).json({
      success:false,
      message:"Please inform details"
    })
   );
  }
  const employee=await Employee.create({name,email,phone});
    res.status(201).json({
      success:true,
      message:"Employee is created.",
      employee,
    })
};
//get
export const getEmployees=async(req,res,next)=>{
  const employees=await Employee.find();
  res.status(200).json({
    success:true,
    employees
  });
};
//update employee/ put method
export const updateEmployee=async(req,res,next)=>{
  const{id}=req.params;
  let employee=await Employee.findById(id);
  if(!employee){
    return next(req.status(404).json({
      success:false,
      message:"Employee is not created."
    }))
  };
  const{name,email,phone}=req.body
   employee=await Employee.findByIdAndUpdate(id,{name,email,phone},{
    new:true,
    useFindAndModify:false,
    runValidators:true

  });
  res.status(200).json({
   success:true,
   message:"employee is updated",
   employee,
  })
}
//delete employee
export const deleteEmployee=async(req,res,next)=>{
  const{id}=req.params;
  let employee=await Employee.findById(id);
  if(!employee){
    return next(res.status(404).json({
      success:false,
      message:"Employee is not deleted."
    }))
  }  
   await employee.deleteOne();
   res.status(200).json({
    success:true,
    message:"Employee is deleted",
  });   
}