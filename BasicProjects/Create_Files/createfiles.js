var fs = require('fs');

// Append text to file. If no file exists, create one.
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	if (err) throw err;
	console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
	if (err) throw err;
	console.log('Saved, again!');
});

fs.writeFile('mynewfile3.txt', 'Hellow Orld!', function (err) {
	if (err) throw err;
	console.log('Saved');
});