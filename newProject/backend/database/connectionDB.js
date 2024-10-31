import mongoose from "mongoose";
export const connectionDB=()=>{
  mongoose.connect(process.env.MONGO_URL,{
    dbName:"todo-project"})
    .then(()=>{console.log("Database is clearly connected.")})
    .catch((error)=>{
    console.log(`While connecting db, some error occurred:${error}`);
  });
}