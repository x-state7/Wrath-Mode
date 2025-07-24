const jwt=require("jsonwebtoken")
require("dotenv").config()

exports.auth=(req,res,next)=>{
    try{
        // extracting jwt token
        const token=req.body.token

        if(!token){
            res.status(401).json({
                success:false,
                message:"Token not found"
            })
        }
        // verify the token
        try{
            const decode =jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user=decode;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:'Token is invalid'
            })
        }
        // next middleware
        next()
    }
    catch(error){

    }
}