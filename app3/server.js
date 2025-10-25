// hello-node/server.js
const http = require('http');
const PORT = 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from hello-node container!\n');
});
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));

