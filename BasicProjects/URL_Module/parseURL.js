var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2021&month=july'
var q = url.parse(adr, true);

console.log(q.host); // returns 'localhose:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2021&month=july'

var qdata = q.query // returns an object { year: 2021, month: 'july' }
console.log(qdata.month); // returns 'July'
console.log(qdata.year)