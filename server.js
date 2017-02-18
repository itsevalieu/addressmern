// Address MERN - server.js

var express = require ("express");
var mongoose = require ("mongoose");
var bodyParser = require ("body-parser");
var logger = require ("morgan");

var Address = require ("./models/address");
var History = require("./models/history");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;

db.on("error", function (error){
	console.log("Mongoose Error: " + error);
});

db.once("open", function(){
	console.log("Mongoose Connection: Successful");
});

app.get("/", function(request, response){
	response.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(request, response){
	Address.find({}).exec(function(error, doc){
		if (error){
			console.log(error);
			response.send("An error has occured.");
		}
		else{
			response.send(doc);
		}
	});
});

app.put("/api", function(request, response){
	var searchTerm = request.body.searchTerm;
	var timeStamp = Date.now();
	
	History.update({
		searchTerm: searchTerm,
		timeStamp: timeStamp	
	}).exec(function(error, doc){
		if (error){
			console.log(error);
			response.send("An error has occured.");
		}
		else{
			response.send(doc);
		}
	});
});

app.listen(PORT, function(){
	console.log("App listening on port " + PORT);
});