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

function maxLevelSum(root: TreeNode | null): number {
     let queue = [root];
    let i=0;
    let maxLvl = 1;
    let maxSum = root.val;

    for (let lvl=1;i<queue.length;++lvl) {
        let endLvl=queue.length;
        let sum=0;
        for (;i<endLvl;++i) {
            let node=queue[i];
            sum+=node.val;
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        if (sum>maxSum) {
            maxSum=sum;
            maxLvl=lvl;
        }
    }
    return maxLvl;
};