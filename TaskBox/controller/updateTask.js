const User=require("../models/User")
const mongoose=require("mongoose")

exports.updateTask=async(req,res)=>{
  try {
    // using find by id and update from mooongoose
    const { id } = req.params;
    const { title, description } = req.body;
    const task = await User.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() },
    )

    res.status(200)
      .json({
        success: true,
        data: task,
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