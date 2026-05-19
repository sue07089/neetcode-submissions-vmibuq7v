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



class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    

    serialize(root) {
        const result = [];

        const preOrder = (node) => {
            if (node === null) {
                result.push("N"); // marker for null
                return;
            }
            result.push(String(node.val));
            preOrder(node.left);
            preOrder(node.right);
        };
        
        preOrder(root);
        return result.join(",");
    }


    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");
        let index = 0;
        
        const buildTree = () => {
            const val = values[index++];
            
            if (val === "N") {
                return null;
            }
            
            const node = new TreeNode(parseInt(val));
            node.left = buildTree();
            node.right = buildTree();
            
            return node;
        };
        
        return buildTree();
    }
}
