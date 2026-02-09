/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var balanceBST = function(root) {
    const nodes = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);            
        nodes.push(node.val);          
        inorder(node.right);           
    }

    function build(start, end) {
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nodes[mid]);      
        node.left = build(start, mid - 1);          
        node.right = build(mid + 1, end);           
        return node;
    }

    inorder(root);
    return build(0, nodes.length - 1);
};