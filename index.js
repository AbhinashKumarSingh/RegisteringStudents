const express=require("express");
const bodyParser=require("body-parser");
require("./mongoose/db/conn");
const Student=require("./mongoose/db/models/students");
const mongoose = require('mongoose');

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
const port=5001;

app.listen(port,()=>{
    
    console.log("connected")
})

 app.use(require('./Router/auth.js'))