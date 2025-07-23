const bcrypt=require("bcrypt")
const User=require("../models/User")
const jwt=requrie("jsonwebtoken")

require("dotenv").config()

// SignUP Handler
exports.signup=async(req,res)=>{
    try{
        // get data
        const{name,email,password}=req.body;
        // check if user already exists
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User Already Exists'
            })
        }

        // secure password
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:'Error in hasing password',
            })
        }

        // create entry for user
        const user=await User.create({
            name,email,password: hashedPassword
        })
        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        })
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:'error in user registration'
        })

    }
}

// login handler
exports.login=async(req,res)=>{
    try{
        // datafetch
        const{email,password}=req.body

        // validation on email and pasword
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill out all these details"
            })
        }

        // first checking if user is present or not
        const user=await User.findOne({email})

        // if not a user
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not registered"
            })
        }

        // creating a payload as we can use this for goiing to the firther router without verifying 
        const payload={
            email:user.email,
            id:user._id,
        }

        // verifying password and generating a jwt token
        if(await bcrypt.compare(password,user.password)){
            // password matched
            let token=jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn:"2h",}
            )
            // creating a token and inserting in user
            user.token=token
            user.password=undefined;

            // creating a cookie
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            // resposne me cookie add krdo
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in Successfully'
            })
        }
        else{
            // passowrds not match
            return res.status(403).sjon({
                success:true,
                message:"passwords do not match"
            })
        }

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Failure in Login in"
        })

    }
}