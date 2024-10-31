import express from "express";
import cors from "cors";
import { connectionDB } from "./database/connectionDB.js";
import employeeRouter from "./router/employeeRouter.js"
import { config } from "dotenv";

//import bcrypt from "bcrypt"
const app=express();
config({path:"./config/config.env"})
app.use(cors({
  origin:["http://localhost:5173"],
  methodsJ:["GET","PUT","POST","DELETE"],
  credentials:true,
}));
//method in backend:(get,put,post,delete);


app.use(express.json());      
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/employee",employeeRouter);

connectionDB();

app.listen(4000,()=>{
  console.log(`Server is running at http://localhost:${4000}`)
})