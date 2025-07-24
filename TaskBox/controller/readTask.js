const User=require("../models/User")

exports.readTask=async(req,res)=>{
    try{
        // fetch all todo items from database
     const tasks = await User.find({});

    // response
    res.status(200)
      .json({
        success: true,
        data: tasks,
        message: "Entire tasks data is fetched",
      })
  }
    catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            message:"error in fetching tasks"
        })
    }
}