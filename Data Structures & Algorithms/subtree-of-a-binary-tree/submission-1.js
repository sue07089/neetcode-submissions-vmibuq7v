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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
     // Helper: Check if two trees are identical
    isSame(p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null || p.val !== q.val) return false;
        return this.isSame(p.left, q.left) && this.isSame(p.right, q.right);
    }

    isSubtree(root, subRoot) {
        //find if val matches, if idoes then check every node in subroot
        if (root === null) return false; 
        // Check if subRoot matches at this node
        if (this.isSame(root, subRoot)) return true;
        
        // Recursively check left and right subtrees
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
