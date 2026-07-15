class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
      adj[a].push(b);
      adj[b].push(a);
    }

    const visited = new Array(n).fill(false);

    // function dfs(node) {
    //   visited[node] = true;
    //   for (const neighbor of adj[node]) {
    //     if (!visited[neighbor]) dfs(neighbor);
    //   }
    // }

    let count = 0;
    
    function bfs (start){
        const queue = [start];

        while(queue.length > 0){
            const node = queue.shift();
            for(const neighbor of adj[node]){
                if(visited[neighbor]) continue;
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        count++;
        bfs(i);
      }
    }

    return count;
  }
}