var express = require('express'),
	app     = express();

app.set('view engine','ejs');

app.get('/', function(req,res){
	res.render("landing");
});

app.get("/about", function(req,res){
	res.render("about");
});

app.get("/gallery", function(req,res){
	res.render("gallery");
});

app.get("/contact", function(req,res){
	res.render("contact");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server is Running!");
});