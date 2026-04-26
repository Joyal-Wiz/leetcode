public class Solution {
    public IList<string> SummaryRanges(int[] nums) {
        List<string> res = new List<string>();

        if (nums.Length == 0) {
            return res;
        }

        int s = nums[0];

        for (int i = 1; i <= nums.Length; i++) {
            if (i == nums.Length || nums[i] != nums[i - 1] + 1) {
                if (s == nums[i - 1]) {
                    res.Add(s.ToString());
                } else {
                    res.Add($"{s}->{nums[i - 1]}");
                }

                if (i < nums.Length) {
                    s = nums[i];
                }
            }
        }

        return res;
    }
}