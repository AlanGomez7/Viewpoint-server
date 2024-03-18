import express from "express";
import dotenv from 'dotenv';
import connect from "./db/config";

const app = express();
dotenv.config()
const port = process.env.PORT
connect();

app.get("/", (req, res)=>{
    res.send("liiii")
})

app.listen(port, ()=>{
    console.log(`connected to port ${port}`)
});