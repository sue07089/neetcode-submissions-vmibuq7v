class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    // the new graph is a cycle. find the cycle or cycles
    // and remove the last occurring edge
    // use union find
    findRedundantConnection(edges) {

        const n = edges.length;
        const parent = new Array(n+1).fill(0).map((_,i) => i);

        const rank = new Array(n+1).fill(0);

        function find(x){
            while(parent[x] !== x){
                parent[x] = parent[parent[x]]; //path compression
                x = parent[x];
            }
            return x;
        }

        function union(a,b){
            const rootA = find(a);
            const rootB = find(b);

            if (rootA === rootB) return false; // already connected -> cycle edge

            // union by rank
            if (rank[rootA] < rank[rootB]) {
                parent[rootA] = rootB;
            } else if (rank[rootA] > rank[rootB]) {
                parent[rootB] = rootA;
            } else {
                parent[rootB] = rootA;
                rank[rootA]++;
            }
            return true;
            }

            let answer = null;

        for (const [a, b] of edges) {
            if (!union(a, b)) {
                answer = [a, b]; // this edge creates the cycle
            }
        }

        return answer;

    }
}
