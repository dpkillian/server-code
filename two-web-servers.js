
// Require HTTP module
var http = require("http");

// Define a port to listen to
var PORT_7000 = 7000;
var PORT_7500 = 7500;

// Create a generic function to handle requests and responses
function handleRequest_7000(request, response){
	response.end("You figured it out...not bad!!");
}

function handleRequest_7500(request, response){
	response.end("You are not very smart...you don't even understand this code!!");
}

// Use node HTTP package to create our server, then pass it
// the handleRequest function to empower it with functionality

var server_7000 = http.createServer(handleRequest_7000);

server_7000.listen(PORT_7000, function(){

	console.log("I'm server_7000 listening on: http://localhost%s", PORT_7000);
	console.log("And you are such a wonderful person!!!");

});



var server_7500 = http.createServer(handleRequest_7500);

server_7500.listen(PORT_7500, function(){

	console.log("I'm server_7500 listening on: http://localhost%s", PORT_7500);
	console.log("And I do not like you!! And you have funny looking glasses!!");

});