import express from "express";
import dotenv from 'dotenv';
import connect from "./db/config";
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
connect();
dotenv.config()
app.use(cors())
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.post("/api/signin", (req, res)=>{
    console.log(req.body)
})

app.listen(process.env.PORT, ()=>{
    console.log(`connected to port ${process.env.PORT}`)
});