var http = require('http');
// Import my module
var dt = require('./exportModule');

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type' : 'text/html'});
// 	res.end('Hellow Orld!');
// }).listen(8080);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time is currently: " + dt.myDateTime());
}).listen(8080);