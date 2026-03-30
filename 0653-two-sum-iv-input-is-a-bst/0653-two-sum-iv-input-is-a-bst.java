/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    // Stack for next smallest (inorder)
    Deque<TreeNode> asc = new ArrayDeque<>();

    // Stack for next largest (reverse inorder)
    Deque<TreeNode> desc = new ArrayDeque<>();

    public boolean findTarget(TreeNode root, int k) {

        if (root == null) return false;

        // Initialize asc stack (leftmost path)
        TreeNode temp = root;
        while (temp != null) {
            asc.push(temp);
            temp = temp.left;
        }

        // Initialize desc stack (rightmost path)
        temp = root;
        while (temp != null) {
            desc.push(temp);
            temp = temp.right;
        }

        TreeNode i = getNextSmall();
        TreeNode j = getNextBig();

        // Two pointer logic
        while (i != null && j != null && i != j && i.val <= j.val) {

            int sum = i.val + j.val;

            if (sum == k) return true;

            if (sum < k) {
                i = getNextSmall(); // move forward
            } else {
                j = getNextBig(); // move backward
            }
        }

        return false;
    }

    // Get next smallest element
    private TreeNode getNextSmall() {

        if (asc.isEmpty()) return null;

        TreeNode node = asc.pop();

        TreeNode temp = node.right;
        while (temp != null) {
            asc.push(temp);
            temp = temp.left;
        }

        return node;
    }

    // Get next largest element
    private TreeNode getNextBig() {

        if (desc.isEmpty()) return null;

        TreeNode node = desc.pop();

        TreeNode temp = node.left;
        while (temp != null) {
            desc.push(temp);
            temp = temp.right;
        }

        return node;
    }
}