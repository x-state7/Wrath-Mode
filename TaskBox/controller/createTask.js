const User=require("../models/User")

exports.createTask=async(req,res)=>{
    try{
        // extracting task from req
        const{description,task}=req.body

        // creating a enw todo obj and inserting it in the database
        const response=await User.create ({task,description})

        // send eres
        res.status(200).json({
            success:true,
            data:response,
            message:"Task created successfully"
        })
    }
    catch (error) {
    console.error(error)
    console.log(error)
    res.status(500)
      .json({
        sucess: false,
        data: "internal server error",
        message: error.message,
      })
  }
}