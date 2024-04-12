const http = require('https');
const express = require('express');
const server = express();

const interval = 60000; // Ping every 15 minutes (adjust as needed)

function startSelfPingLoop() {
  setInterval(() => {
    // Send a GET request to the server endpoint
    http.get(`https://robot---foxxie-.repl.co/`, (res) => {
      console.log('Self-pinged the server.');
    });
  }, interval);
}

// Start the HTTP server
server.all("/", (req, res) => {
  res.send(`Result: [OK].`);
});

server.listen(3000, () => {
  console.log(`Server is now ready! | ` + Date.now());
});

module.exports = startSelfPingLoop;