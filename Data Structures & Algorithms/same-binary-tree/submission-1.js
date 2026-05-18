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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q, isSame=true) {
        if(p === null && q === null) return isSame;
        if(p === null) return false;
        if(q === null) return false;
        isSame = p.val === q.val;
        return (isSame && this.isSameTree(p.left, q.left, isSame) && this.isSameTree(p.right, q.right, isSame));
    }
}
