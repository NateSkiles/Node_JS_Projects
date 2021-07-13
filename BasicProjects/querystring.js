var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	// Parse url passed in request
	var q = url.parse(req.url, true).query;
	// http://localhost:8080/?year=2021&month=July would return '2021 July'
	var txt = q.year + " " + q.month;
	res.end(txt);
}).listen(8080);