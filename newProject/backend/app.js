import express from "express";
import {config}from "dotenv";
import { connectionDB } from "./database/connectionDB.js";
import userRouter from "./router/userRouter.js";
import taskRouter from "./router/taskRouter.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app= express();
config({path:"./config/config.env"});
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","PUT","POST","DELETE"],
  credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/user",userRouter);
app.use("/api/v1/task",taskRouter);


connectionDB();

export default app;