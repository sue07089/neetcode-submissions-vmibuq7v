/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        //bfs - at every level we are checking if there is a right node
        // if a right node exists then we skip the left nodes 
        // else we add them to res
        if (!root) return [];
        const res = [];
        const queue = [root];
        while(queue.length > 0){
            const size = queue.length;
            for(let i =0 ; i < size; i++){
                const node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                if (i === size - 1) res.push(node.val);
            }
        }
        return res;
    }
}
