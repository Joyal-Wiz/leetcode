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
 * @return {number}
 */
var maxLevelSum = function(root) {
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