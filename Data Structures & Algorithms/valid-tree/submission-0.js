class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // condition 1: a tree must have exactly n - 1 edges
        if (edges.length !== n - 1) return false;

        // build a truly undirected adjacency list — push both directions
        const graph = Array.from({length: n}, () => []);
        for (const [a, b] of edges){
            graph[a].push(b);
            graph[b].push(a);
        }

        // condition 2: the graph must be fully connected
        const visited = new Array(n).fill(false);
        const queue = [0];
        visited[0] = true;
        let visitedCount = 1;

        while (queue.length > 0){
            const node = queue.shift();
            for (const neighbor of graph[node]){
                if (!visited[neighbor]){
                    visited[neighbor] = true;
                    visitedCount++;
                    queue.push(neighbor);
                }
            }
        }

        return visitedCount === n;
    }
}
