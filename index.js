// console.log(module)
var http=require('http')
var server=http.createServer(function(req,res){
    if(req.url==="/check"){
        res.end("Hello from Server!!!")
    }
})

server.listen(8787,()=>{
    console.log("Server Started!!!");
})