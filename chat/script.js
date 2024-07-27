const WebSocket = require('ws');
const http = require('http');
const port = 3000;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', async (message) => {
    console.log(`Received: ${message}`);
    
    // Here you would integrate the ChatGPT API to get a response.
    // For simplicity, let's echo the message back for now.
    const chatGptResponse = `Echo: ${message}`;
    
    ws.send(chatGptResponse);
  });
  
  ws.send('Welcome to ChatGPT WebSocket Server!');
});

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
