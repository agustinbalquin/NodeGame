// app.js Javascript

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
 
app.use(express.static(__dirname + '/public')); // sets public as the home directory
 
app.get('/', function(req, res){
  res.render('/index.html');
});
 
server.listen(80); // listen on port 80
console.log("Multiplayer app listening on port 80");
