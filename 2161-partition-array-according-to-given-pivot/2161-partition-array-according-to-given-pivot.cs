public class Solution {
    public int[] PivotArray(int[] nums, int pivot) {
        List<int> result = new List<int>();

        foreach (int num in nums) {
            if (num < pivot) {
                result.Add(num);
            }
        }

        foreach (int num in nums) {
            if (num == pivot) {
                result.Add(num);
            }
        }

        foreach (int num in nums) {
            if (num > pivot) {
                result.Add(num);
            }
        }

        return result.ToArray();
    }
}