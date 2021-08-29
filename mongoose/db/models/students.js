const mongoose=require("mongoose");


const studentScheme= new mongoose.Schema({
    name:String,
    contact:Number,
    subjects:[String],
    class:[String],
    society:[String],
   
    year:Number,
    age:Number,
    date:{
        type:Date,
        default:Date.now()
    }
});

const Student=new mongoose.model("Student",studentScheme);

module.exports =Student;