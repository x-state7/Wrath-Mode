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
    description:{
        type:String,
    },
    fileUrl:{
        type:URL
    },
    tags:{
        type:String
    },
    status:{
        type:String
    }

})