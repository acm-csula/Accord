const socket = require('socket.io');
const express = require('express');
const app = express();

// Create server nodemon app.js
server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

// Establish basic connection
io = socket(server);

io.on('connection', (socket) => {
	socket.on('SEND_MESSAGE', function(data){
    	socket.broadcast.emit('RECEIVE_MESSAGE', data);
	})
});