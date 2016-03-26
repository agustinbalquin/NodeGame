// Node.js game server
var util = require("util"),
    io = require("socket.io");
var socket;
var players;

function init() {
	players = [];
};

init();