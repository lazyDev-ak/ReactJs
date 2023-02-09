const { mongoose } = require(".")

module.exports=mongoose=>{

    let Schema= mongoose.Schema({
        firstName:String,
        lastName:String,
        city:String
    })

    const User=mongoose.model("user",Schema)
    return User
}