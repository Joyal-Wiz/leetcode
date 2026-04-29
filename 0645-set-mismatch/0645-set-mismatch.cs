public class Solution {
    public int[] FindErrorNums(int[] nums) {
        int duplicate = -1, missing = -1;
        foreach (int num in nums)
        {
            if (nums[Math.Abs(num) - 1] < 0)
                duplicate = Math.Abs(num);
            else
                nums[Math.Abs(num) - 1] *= -1;
        }

        for (int i = 0; i < nums.Length; i++)
            if (nums[i] > 0)
                missing = i + 1;

        return new int[] { duplicate, missing };
    }
}