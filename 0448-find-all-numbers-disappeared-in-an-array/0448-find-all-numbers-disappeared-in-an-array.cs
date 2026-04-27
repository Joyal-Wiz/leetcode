public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) => Enumerable.
        Range(1, nums.Length).
        Except(nums).
        ToList();
}