const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    task:{
        type:String,
    },
    labels:{
        type:String,
    }
})