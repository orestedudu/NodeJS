var http = require('http');
var dt = require('./meunovomodulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'ola'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080); 