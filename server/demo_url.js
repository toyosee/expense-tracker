const dt = require('./myfirstmodule');
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write(req.url);
  // res.write(dt.myDateTime());
  let split_url = url.parse(req.url, true).query;
  let result = `Year ${split_url.year} Month ${split_url.month}`;
  res.end(result);
}).listen(dt.myPort()); 

console.log(`Running on Port - ${dt.myPort()} at ${dt.myDateTime()}`)

