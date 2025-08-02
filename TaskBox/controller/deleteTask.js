const User=require("../models/User")

exports.deleteTask=async(req,res)=>{
    try{
        // using find by id nad delete
        const {id}=req.params;
        await User.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"Task Deleted"
        })
    }
    catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}