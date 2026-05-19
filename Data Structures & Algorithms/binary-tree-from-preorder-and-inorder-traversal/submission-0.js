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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        //in preorder -> root, left, right, also sorted
        //in inorder -> left, root, right
        if (preorder.length === 0 || inorder.length === 0) return null;
    
    // First element in preorder is the root
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    
    // Find root position in inorder
    const rootIndex = inorder.indexOf(rootVal);
    
    // Elements to the left of root in inorder are left subtree
    const inorderLeft = inorder.slice(0, rootIndex);
    // Elements to the right of root in inorder are right subtree
    const inorderRight = inorder.slice(rootIndex + 1);
    
    // Elements after root in preorder (count = inorderLeft.length) are left subtree
    const preorderLeft = preorder.slice(1, 1 + inorderLeft.length);
    // Remaining elements in preorder are right subtree
    const preorderRight = preorder.slice(1 + inorderLeft.length);
    
    // Recursively build left and right subtrees
    root.left = this.buildTree(preorderLeft, inorderLeft);
    root.right = this.buildTree(preorderRight, inorderRight);
    
    return root;

    }
}
