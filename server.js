var express = require("express")
var app = express()
var port = process.env.port || 3000;




app.listen(port,()=>{
	console.log("app listening to: "+port)
})