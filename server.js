var express = require ("express");
var app=express();
	app.use(express.static(__dirname));
app.get("/hero", function(request,response){
	response.send("hello from express");
});

app.get("/", function(request,response){
	response.send();
});
app.listen(3000);
console.log("your server is now running on 2233");
