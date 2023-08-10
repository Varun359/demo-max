const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - Received ${req.method} request for ${req.url}`);

  if (req.url === '/extend' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'public', 'index.html');
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = 80;
server.listen(PORT, () => {
  console.log(`Server running................`);
});