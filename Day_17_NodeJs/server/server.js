// here we will create a simple http based backend server using nodejs based on following steps 
//Step 1: Creating http constant
//Step 2: creating Http server 
//Step 3: starting the server @3000 port
//Step 4: running the server 

const http = require('http'); // creating http variable 

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to Node.js Server!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

