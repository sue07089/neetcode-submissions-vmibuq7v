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
maxPathSum(root) {
    this.maxSum = Number.NEGATIVE_INFINITY;
    this.dfs(root);
    return this.maxSum;
}

dfs(node) {
 // Base case: leaf node or null
    if (node === null) return 0;
    
    // Post-order: process LEFT first
    const leftMax = this.dfs(node.left);
    
    // Post-order: process RIGHT second
    const rightMax = this.dfs(node.right);
    
    // Post-order: process CURRENT node last
    // Now we have all child information available
    const leftPath = Math.max(0, leftMax);
    const rightPath = Math.max(0, rightMax);
    
    // Path through this node
    const pathThroughNode = node.val + leftPath + rightPath;
    this.maxSum = Math.max(this.maxSum, pathThroughNode);
    
    // Return path that can extend upward
    return node.val + Math.max(leftPath, rightPath);
}
}
