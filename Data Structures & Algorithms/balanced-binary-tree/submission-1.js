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
            if (!node) return 0;
            const left  = dfs(node.left);
            const right = dfs(node.right);
            if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
            return 1 + Math.max(left, right);
        };

        return dfs(root) !== -1;
    }
}
