public class Solution {
    public int ArrayPairSum(int[] nums) {
        int max = 0;
        Array.Sort(nums);
        for (int i = 0; i < nums.Length; i = i + 2)
        {
            max += Math.Min(nums[i], nums[i+1]);
        }
        return max;
    }
}