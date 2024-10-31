import mongoose from "mongoose";
export const connectionDB=()=>{
  mongoose.connect(process.env.MONGO_URL,{
    dbName:"backend-mern-project"})
    .then(()=>{console.log("Database is clearly connected.")})
    .catch((err)=>{
    console.log(`While connecting db, some error occurred:${err}`);
  });  
};

//mongodb+srv://sungiraishita234:gVXFxMz9AEcFggKz@cluster0.pfwf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0