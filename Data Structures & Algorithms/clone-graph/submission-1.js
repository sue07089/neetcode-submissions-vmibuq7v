/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;

        const map = new Map();
       
        function dfs(cur) {
            if(map.has(cur)) return map.get(cur);

            const newNode  = new Node(cur.val);
            map.set(cur, newNode);

            for(const neighbor of cur.neighbors){
                newNode.neighbors.push(dfs(neighbor));

            }

            return newNode;

        }
         return dfs(node);

    }
}
