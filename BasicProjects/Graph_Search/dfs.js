import chalk from "chalk";

export default function bfs(start, map) {
    console.log(start)

    const visited = new Set()

    visited.add(start)

    const destinations = map.get(start);

    for (const destination of destinations) {
        if (destination === 'JFK') {
            console.log(chalk.bold.green(`Found it! ${destination}`)) // Search for specific node
            return;
        }
    }
}