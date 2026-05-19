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

    validate(root, min, max) {
        if (root === null) return true;
            
            // Check if current node violates BST property
            if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
                return false;
            }
            
            // Validate left subtree: all values must be < root.val
            // Validate right subtree: all values must be > root.val
            return this.validate(root.left, min, root.val) && 
                this.validate(root.right, root.val, max);
    }

    isValidBST(root) {
        //dfs
        if(root===null) return true;
        return this.validate(root, null, null);
    }
}
