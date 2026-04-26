public class Solution {
  public int[] FindIndices(int[] nums, int indexDifference, int valueDifference) {
    int n = nums.Length;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        if (Math.Abs(i - j) >= indexDifference) {
          if (Math.Abs(nums[i] - nums[j]) >= valueDifference) {
            return new int[] { i, j };
          }
        }
      }
    }
    return new int[] { -1, -1 };
  }
}