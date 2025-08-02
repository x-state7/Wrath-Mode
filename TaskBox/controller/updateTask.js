const User=require("../models/User")
const mongoose=require("mongoose")

exports.updateTask=async(req,res)=>{
  try {
    // using find by id and update from mooongoose
    const { id } = req.params;
    const { task, description,status } = req.body;
    const Task = await User.findByIdAndUpdate(
      { _id: id },
      { task, description,status, updatedAt: Date.now() },
    )

    res.status(200)
      .json({
        success: true,
        data: Task,
        message: "updated successfully",
      })

  }
  catch (error) {
    console.error(error);
    res.status(500)
      .json({
        success: false,
        data: "internal server error",
        message: error.message,
      })

  }
}