const http = require('http');
const myDate = require('./myfirstmodule');
let message = 'Hello World. I am alive!!!';
let port = 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`The current Date is ${myDate.myDateTime()}, ${message}`);
  res.end();
}).listen(port); 
console.log(`Now Running on Port - ${port}`);



