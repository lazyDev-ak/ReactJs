var express = require("express")
var cors = require("cors")
var app = express();

app.use(cors());
app.use(express.json())

var sever =api.listen(8000,()=>{
    var host = "127.0.0.1";
    var port = sever.address().port;
    console.log(`Listening at http://${host}:${port}`);
})