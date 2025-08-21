// Install dependencies: npm install express socket.io
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // Serve HTML/JS from public folder

let waitingUser = null;

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join', () => {
    if (waitingUser) {
      // Pair the two users
      socket.partner = waitingUser;
      waitingUser.partner = socket;

      socket.emit('matched');
      waitingUser.emit('matched');

      waitingUser = null;
    } else {
      // No one waiting, put this user in the queue
      waitingUser = socket;
    }
  });

  socket.on('message', (msg) => {
    if (socket.partner) {
      socket.partner.emit('message', msg);
    }
  });

  socket.on('leave', () => {
    if (socket.partner) {
      socket.partner.emit('partnerLeft');
      socket.partner.partner = null;
      socket.partner = null;
    }
  });

  socket.on('disconnect', () => {
    if (socket.partner) {
      socket.partner.emit('partnerLeft');
      socket.partner.partner = null;
    }
    if (waitingUser === socket) waitingUser = null;
    console.log('A user disconnected:', socket.id);
  });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
