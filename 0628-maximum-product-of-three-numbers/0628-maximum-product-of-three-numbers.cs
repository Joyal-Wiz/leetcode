public class Solution {
    public int MaximumProduct(int[] nums) {
        Array.Sort(nums);
        int n = nums.Length;

        int prod1 = nums[n-1] * nums[n-2] * nums[n-3];
        int prod2 = nums[n-1] * nums[0] * nums[1];

        return Math.Max(prod1, prod2);
    }
}