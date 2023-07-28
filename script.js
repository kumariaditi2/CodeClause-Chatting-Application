// // Connect to the WebSocket server
// const socket = new WebSocket('ws://localhost:8080');

// // DOM elements
// const chatBox = document.getElementById('chat-box');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// // Handle connection open
// socket.onopen = () => {
//   console.log('Connected to the server.');
// };

// // Handle messages received from the server
// socket.onmessage = (event) => {
//   const message = event.data;
//   displayMessage(message);
// };

// // Handle connection close
// socket.onclose = () => {
//   console.log('Disconnected from the server.');
// };

// // Send message to the server when the Send button is clicked
// sendButton.addEventListener('click', () => {
//   let message = messageInput.value;
  
//     socket.send(message);
//    // displayMessage(`Your: ${message}`);
  
//   messageInput.value = '';
// });

// // socket.addEventListener('message', (event, isBinary) => {
// //     console.log(event.data)
// // } )


// // Display a message in the chat box
// function displayMessage(message) {
//   const p = document.createElement('p');
//   p.textContent = message;
//   chatBox.appendChild(p);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }




