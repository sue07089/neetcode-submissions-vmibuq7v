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
     * @return {boolean}
     */
    isBalanced(root) {
         const dfs = (node) => {
            if (!node) return 0;              // ✅ base case — height 0

            const left  = dfs(node.left);    // ✅ local, not shared
            const right = dfs(node.right);

            if (left  === -1) return -1;     // propagate failure up
            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) return -1;  // unbalanced here

            return 1 + Math.max(left, right);  // ✅ return height
        };

        return dfs(root) !== -1;
    }
}
