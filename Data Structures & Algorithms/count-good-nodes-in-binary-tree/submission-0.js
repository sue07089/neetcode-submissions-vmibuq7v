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
     * @return {number}
     */
    goodNodes(root) {
        // a good node is > all node seen so far from root
        const dfs = (node, maxSoFar) => {
            if(!node) return 0;

            const isGood = node.val >= maxSoFar ? 1: 0;

            const newMax = Math.max(node.val, maxSoFar);

            return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);

        }

        return dfs(root, -Infinity);
    }
}
