const express=require('express')
const cors=require('cors')

const app=express()

// const corsOptions={
//     origin:"http://localhost:3000"
// }

// app.use(cors(corsOptions))
app.use(express.json())

// return string
app.get("/check",(req,res)=>{
    res.send("Hello from Node Express Server!!!")
})


const person={
    name:"Peter",
    city:"Mumbai"
}

const users=[{
    name:"john",
    city:"Pune"
},{
    name:"Peter",
    city:"Mumbai"
}]

//return single object
app.get("/singleObject",(req,res)=>{
    res.send(person)
})

//return multiple objects/array
app.get("/multiple",(req,res)=>{
    res.send(users)
})

app.post("/send",(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.get("/addNumbers/:num1/:num2",(req,res)=>{
    let result=Number(req.params.num1) + Number(req.params.num2);
    res.send({"result":result})
})

app.post("/addNum",(req,res)=>{
    let obj = req.body
    let result=Number(obj.num1) + Number(obj.num2);
    res.send({"result":result})
})

app.listen(8889,()=>{
    console.log('Server Started on Port 8889');
})