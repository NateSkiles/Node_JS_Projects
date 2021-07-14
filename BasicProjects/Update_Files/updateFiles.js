var fs = require('fs');
var dt = require('../exportModule')

fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {
	if (err) throw err;
	console.log('Updated!');
});

// Import exportModule and append current datetime to mynewfile
var m = dt.myDateTime();

fs.appendFile('mynewfile1.txt', ' ' + m + '\n', function (err) {
	if (err) throw err;
	console.log('Updated w/the Date');
});