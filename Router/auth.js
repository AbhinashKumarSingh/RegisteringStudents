const express=require("express");

const mongoose=require("../mongoose/db/conn");
const Student=require("../mongoose/db/models/students");
const router=express.Router();

router.post("/register",(req,res)=>{

    const data=new Student(req.body);
    console.log(data)
    Student.create({
        name:req.body.name,
        contact:req.body.contact,
        subjects:req.body.subjects,
        class:req.body.class,
        society:req.body.society,
        age:req.body.age,
        year:req.body.year
    })
    .then(()=>{
        res.send(user);
    })
    .catch((e)=>{
        res.send(e);
    });
        //res.send("hello from abhi")
 })

 router.post('/find',async(req,res)=>{
     
     var a=parseInt(req.body.age)
     console.log(req.body.society)
   const result=await Student.find({$and:[{society:{$in:["Swimming"]}},{age:{$gt:a}},{class:{$in:[req.body.class]}}]})
    console.log(result)
    res.send(result)
 })

 router.post('/count',async(req,res)=>{
    
    
    //console.log(req.body.society)
  const result=await Student.find({$and:[{society:{$in:["Theatre"]}},{class:{$in:["Science"]}}]}).count()
   console.log(result)
   console.log(result)
    res.send("Hy")
})

 module.exports=router;