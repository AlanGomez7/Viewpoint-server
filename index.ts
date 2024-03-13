import express from "express";
const port = 4999
const app = express();

app.listen(port, ()=>{
    console.log(`connected to port ${port}`)
});