const socket = io();
const inputMessage = document.getElementById('inputMessage');
const sendMessageButton = document.getElementById('sendMessage');
const messagesContainer = document.getElementById('messages');
const onlineStatusContainer = document.getElementById('onlineStatus');

// Identify user as sender or receiver based on HTML file
const isSender = window.location.pathname === '/sender.html';

// Send message
sendMessageButton.addEventListener('click', () => {
    const message = inputMessage.value;
    if (message) {
        socket.emit('chat message', { text: message, isSender });
        inputMessage.value = '';
    }
});

// Display received messages
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg.text;
    messageElement.classList.add('message');
    messageElement.classList.add(msg.isSender ? 'message-sender' : 'message-receiver');
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// Update online/offline status of users
socket.on('userStatus', (usersOnline) => {
    onlineStatusContainer.innerHTML = '';
    Object.keys(usersOnline).forEach((userId) => {
        const statusElement = document.createElement('div');
        statusElement.textContent = `User ${userId} is online`;
        onlineStatusContainer.appendChild(statusElement);
    });
});
