class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    // find if there is a path from start to the end of the node - dfs
    // run bfs, every new unexplored node / unvisted noed is new graph
    // union find - later 
    countComponents(n, edges) {

        //dfs
        function adjList () {
            const adjMap = new Map();

            for(let i = 0; i < n; i ++){ //initial
                adjMap.set(i, []);
            }

            for(let i =0; i < edges.length; i++){
                //bidirectional edges
                 const [n1, n2] = edges[i];
                 adjMap.get(n1).push(n2);
                 adjMap.get(n2).push(n1);
            }

            return adjMap;
        }

        let count = 0;
        const visited = new Array(n).fill(false);
        const adjMap = adjList();
       function dfs(start) {
            visited[start] = true;
            for (const neighbor of adjMap.get(start)) {
                if (!visited[neighbor]) {
                dfs(neighbor);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i);
            }
        }

        return count;


    }
}
