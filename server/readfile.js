const http = require('http');
const fs = require('fs');
const dt = require('./myfirstmodule');

// Use the file server module to read files
http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(dt.myPort()); 

// Append a file
// let message = `Lorem ipsum dolor sit, amet consectetur 
// adipisicing elit. In quas quisquam non eius fuga corporis, 
// omnis rerum animi iure voluptatum, modi vitae, architecto 
// minus suscipit voluptatem temporibus accusantium. Provident, 
// facere.`
// http.createServer(function (req, res) {
//     fs.appendFile('mynewfile1.txt', message, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       }); 
//   }).listen(dt.myPort()); 