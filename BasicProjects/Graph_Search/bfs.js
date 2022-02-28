import chalk from 'chalk'

// BFS Breadth First Search
export default function bfs(start, map) {

    const visited = new Set(); // Track airports that the loop vists

    const queue = [start];

    while (queue.length > 0) {

        const airport = queue.shift(); // Removes the first element from an queue and returns it.

        const destinations = map.get(airport); // Get all edges for airport

        for (const destination of destinations) {

            if (destination === 'JFK') {
                console.log(chalk.bold.green(`Found it! ${destination}`)) // Search for specific node
            }

            if (!visited.has(destination)) {
                visited.add(destination);   // mark destination as visited
                queue.push(destination);    // add to queue
                console.log(chalk.yellow(destination));
            }
        }
    }

}