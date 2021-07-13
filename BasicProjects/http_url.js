var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	// Writes whatever url path is passed back from the request.
	// localhost:8080/summer will display '/summer'
	res.write(req.url);
	res.end();
}).listen(8080);