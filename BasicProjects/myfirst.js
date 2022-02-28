import http from 'http';
// Import my module
import myDateTime from './exportModule.js';

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type' : 'text/html'});
// 	res.end('Hellow Orld!');
// }).listen(8080);

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(`The date and time is currently: ${myDateTime()}`);
}).listen(8080);