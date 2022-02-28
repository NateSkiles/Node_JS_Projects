import bfs from "./bfs.js";
import dfs from "./dfs.js";
import chalk from "chalk";

// Array of airports (Nodes)
const airports = 'PDX LAX SEA OKC JFK MEX EZE DUB'.split(' ');

// Array of routes (edges)
const routes = [
    ['PDX', 'LAX'],
    ['PDX', 'SEA'],
    ['SEA', 'LAX'],
    ['JFK', 'PDX'],
    ['JFK', 'DUB'],
    ['MEX', 'LAX'],
    ['EZE', 'LAX'],
    ['OKC', 'PDX'],
    ['JFK', 'LAX'],
]

// The Graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

// console.log(adjacencyList)

console.log(chalk.cyan(`Breadth First Search:`))
bfs('PDX', adjacencyList);

console.log(chalk.cyan(`Depth First Search:`))
dfs('PDX', adjacencyList);