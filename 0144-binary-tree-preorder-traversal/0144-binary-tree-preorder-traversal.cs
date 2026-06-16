/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public void helper(TreeNode root , IList<int> ans){
        if(root == null)return;
        ans.Add(root.val);
        helper(root.left , ans);
        helper(root.right , ans);
    }
    public IList<int> PreorderTraversal(TreeNode root) {
        List<int> ans = new List<int>();
        if(root == null)return ans;
        helper(root , ans);
        return ans;
    }
}