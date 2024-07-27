const ws = new WebSocket('ws://localhost:3000');
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

ws.onopen = () => {
  console.log('Connected to WebSocket server');
};

ws.onmessage = (event) => {
  const message = document.createElement('div');
  message.textContent = `Server: ${event.data}`;
  messagesContainer.appendChild(message);
};

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  ws.send(message);

  const messageDiv = document.createElement('div');
  messageDiv.textContent = `You: ${message}`;
  messagesContainer.appendChild(messageDiv);

  messageInput.value = '';
});
