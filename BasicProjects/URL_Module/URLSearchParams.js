let params;

// Using an array
// params = new URLSearchParams([
//     ['user', 'abc'],
//     ['query', 'first'],
//     ['query', 'second'],
// ]);
// console.log(params.toString());
// Prints 'user=abc&query=first&query=second'

// Using Map Object
// const map = new Map();
// map.set('user', 'foo')
//     .set('query', 'bar');
// params = new URLSearchParams(map);
// console.log(params.toString())
// console.log(params)
// console.log(map.size)

// Using a generator function
// function* getQueryParis() {
//     // Each key-value pair must have exactly two elements
//     yield ['user', 'foo']
//     yield ['query', 'bar']
//     yield ['query', 'cats']
// }

// params = new URLSearchParams(getQueryParis());

// forEach - Iterates over each name-value pair in the query and invokes the given function.
const myURL = new URL(`http://localhost:8080/default.htm?year=2021&month=july`)
console.log(`URL: ${myURL}\nSearch Params: `)
const myParams = myURL.searchParams.forEach((value, name, searchParams) => {
    console.log(
        `\tName: ${name}
        Value: ${value}
        Param: ${searchParams}`
    )
})