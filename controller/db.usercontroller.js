const db=require("../models")
const User=db.users

exports.create=(req,res)=>{
    const user= new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city,
    })

    //save to database
    user.save(user).then((data)=>{
        res.send(data)
    })
}