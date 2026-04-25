public class Solution {
    public int FindMaxK(int[] nums) {
        Array.Sort(nums);
        int j = nums.Length - 1, i = 0;
        while (i < j) {
            int a = -1 * nums[j];
            if (nums[i] == a)
                return nums[j];
            else if (nums[i] < a)
                i++;
            else
                j--;
        }
        return -1;
    }
}