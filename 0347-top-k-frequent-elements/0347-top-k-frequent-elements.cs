public class Solution {
    public int[] TopKFrequent(int[] nums, int k) => nums.GroupBy(m => m).
        OrderByDescending(m => m.Count()).
        Select(m => m.Key).
        Take(k).
        ToArray();
}