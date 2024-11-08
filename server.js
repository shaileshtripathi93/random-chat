const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let usersOnline = {};

app.use(express.static('public'));

io.on('connection', (socket) => {
    // Track online users and broadcast their status
    usersOnline[socket.id] = 'User';
    io.emit('userStatus', usersOnline);

    console.log('A user connected:', socket.id);

    // Broadcast message to all clients
    socket.on('chat message', (msg) => {
        io.emit('chat message', { text: msg.text, isSender: msg.isSender });
    });

    // Update status when user disconnects
    socket.on('disconnect', () => {
        delete usersOnline[socket.id];
        io.emit('userStatus', usersOnline);
        console.log('A user disconnected:', socket.id);
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
