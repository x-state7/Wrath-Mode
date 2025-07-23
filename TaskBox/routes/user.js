const express=require("express")
const router=express.Router()

const {login,signup}=require("../controler/auth")

//Routes
router.post("./login",login)
router.post("/signup", signup)

// Protected routes
// ---------test route-------

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for taskbox"
    })
})

// after login we can have to different routes
router.post("/createTask",auth,createTask,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route for creating task'
    })
})

router.get("/readTask",auth,readTask,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route for creating task'
    })
})
router.put("/updateTask",auth,updateTask,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route for creating task'
    })
})
router.delete("/deleteTask",auth,deleteTask,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route for creating task'
    })
})