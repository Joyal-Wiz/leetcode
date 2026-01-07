/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxProduct(root: TreeNode | null): number {
     const MOD = 1e9 + 7;
    let totalSum = 0;
    let maxProd = 0;

    function dfsSum(node) {
        if (!node) return 0;
        return node.val + dfsSum(node.left) + dfsSum(node.right);
    }

    totalSum = dfsSum(root);

    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        const sub = node.val + left + right;
        maxProd = Math.max(maxProd, sub * (totalSum - sub));
        return sub;
    }

    dfs(root);
    return maxProd % MOD;
};