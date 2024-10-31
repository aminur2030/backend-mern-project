import { Task } from "../models/taskSchema.js";
export const createTask=async(req,res,next)=>{
  const{title,description}=req.body;
  const createdBy=req.user._id;
  if(!title || !description){
    return next(res.status(400).json({
      success:false,
      message:"Properly provide  description & title."
    }))
  }
  const task=await Task.create({title,description,createdBy});
  res.status(200).json({
    success:true,
    message:"Task created."
  })
}

export const getMyTasks=async (req,res,next)=>{
  const tasks=await Task.find({createdBy:req.user._id});
  res.status(200).json({
    success:true,
    tasks,
  })
};
export const deleteTask=async (req,res,next)=>{
  const task=await Task.findById(req.params.id);
  if(!task){
    return next(res.status(404).json({
      success:false,
      message:"Task not found."
    }))
  }
  await task.deleteOne()
  res.status(200).json({
    success:true,
    Message:"Task is deleted."
  })
}

export const updateTask=async (req, res, next)=>{
  let task=await Task.findById(req.params.id);
  if(!task){
    return next(res.status(404).json({
      success:false,
      message:"Task not found."
    }))
  }
  const{title,description}=req.body;
  task=await Task.findByIdAndUpdate(req.params.id,{
    title,description},{
      new:true,
      runValidators:true,
      useFindAndModify:false
    });
    res.status(200).json({
      success:true,
      message:"Task updated."
    })

}