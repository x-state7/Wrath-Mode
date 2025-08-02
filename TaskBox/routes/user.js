const express=require("express")
const router=express.Router()

const {login,signup}=require("../controler/auth")
const {createTask}=require("../controller/createTask")
const {deleteTask}=require("../controller/deleteTask")
const {updateTask}=require("../controller/updateTask")
const {readTask}=require("../controller/readTask")

const {auth}=require("../controller/auth")

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
router.post("/createTask",auth,createTask)

router.get("/readTask",auth,readTask)

router.put("/updateTask",auth,updateTask)

router.delete("/deleteTask",auth,deleteTask)


// file uploading route 