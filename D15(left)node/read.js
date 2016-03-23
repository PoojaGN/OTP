var http=require("http");
var host="localhost";
var port=2345;

var server=http.createServer(function(req,res){
	console.log(req,url);
	
})
server.listen(port,host,function(){
	console.log("serer is now running on port"+port);
})
