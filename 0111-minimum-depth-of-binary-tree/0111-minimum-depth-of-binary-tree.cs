public class Solution 
{
    public int MinDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        var leftMinDepth = MinDepth(root.left);
        var rightMinDepth = MinDepth(root.right);

        if (leftMinDepth == 0 || rightMinDepth == 0)
        {
            return Math.Max(leftMinDepth, rightMinDepth) + 1;
        }

        return Math.Min(leftMinDepth, rightMinDepth) + 1;
    }
}