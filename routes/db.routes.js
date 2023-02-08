module.exports=app=>{
    
    const router=require("express").Router()
    const users=require('../controller/db.usercontroller')

    router.post("/saveData",users.create)

    app.use("/api",router)


}