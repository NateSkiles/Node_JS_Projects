import { URL } from 'url';

// var url = require('url');
// // var adr = 'http://localhost:8080/default.htm?year=2021&month=july'
// var adr = 'https://www.w3schools.com/nodejs/nodejs_raspberrypi_webserver_websocket.asp'
// var q = url.parse(adr, true);

// console.log(q.host); // returns 'localhose:8080'
// console.log(q.pathname); // returns '/default.htm'
// console.log(q.search); // returns '?year=2021&month=july'

// var qdata = q.query // returns an object { year: 2021, month: 'july' }
// console.log(qdata.month); // returns 'July'
// console.log(qdata.year)

// WHATWG
// const myURL = new URL('https://www.w3schools.com/nodejs/nodejs_raspberrypi_webserver_websocket.asp');
// // console.log(myURL);
// console.log(`Host name: ${myURL.hostname}\nPathname: ${myURL.pathname}`)

const myURLs = [
    new URL('http://localhost:8080/default.htm?year=2021&month=july'),
    new URL('https://www.w3schools.com/nodejs/nodejs_raspberrypi_webserver_websocket.asp')
]

console.log(`${myURLs}\n\n`)
console.log(`${myURLs[0].searchParams}\n\n`)
console.log(`${JSON.stringify(myURLs)}`);