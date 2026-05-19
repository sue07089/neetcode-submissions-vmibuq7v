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
     * @param {number} k
     * @return {number}
     */
    inOrder(root) {
        if (root === null) return;
        
        // Traverse left subtree
        this.inOrder(root.left);
        
        // Process current node
        this.count--;
        if (this.count === 0) {
            this.result = root.val;
            return;
        }
        
        // Traverse right subtree
        this.inOrder(root.right);
    }

    kthSmallest(root, k) {
       this.count = k;
       this.result = null;
       this.inOrder(root);
       return this.result;

    }
}
