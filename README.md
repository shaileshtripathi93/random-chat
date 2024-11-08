# Chat Application

A minimal real-time chat application designed with JavaScript, Node.js, and Socket.io. This app provides an interface for two users—a sender and a receiver—to exchange messages and see each other's online status, emulating a familiar messaging experience.

![App Screenshot](https://github.com/shaileshtripathi93/random-chat/blob/main/Screenshot%202024-11-08%20133445.png)


## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

project-folder/
├── public/
│   ├── sender.html          # Sender's chat interface
│   ├── receiver.html        # Receiver's chat interface
│   ├── app.js               # Frontend JavaScript for chat functionality
│   └── styles.css           # CSS for styling the app interface
├── server.js                # Node.js server setup with Socket.io
└── package.json             # Project metadata and dependencies


## Features

- **Real-Time Messaging**: Instant message updates between sender and receiver using Socket.io.
- **Online/Offline Status**: Dynamic status updates to see when the other user is online.
- **Clear User Interface**: Clean UI inspired by popular messaging apps, with separate screens for sender and receiver.

## Technologies

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.io

---

## Installation

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
    cd project-folder
   
  ```bash
   npm install
   node server.js
   http://localhost:3000/sender.html
   http://localhost:3000/receiver.html




