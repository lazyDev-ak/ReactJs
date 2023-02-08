module.exports=mongoo=>{

    let schema= mongoose.Schema({
        firstName:String,
        lastName:String,
        city:String
    })

    const User=mongoose.model("user",schema)
    return User
}