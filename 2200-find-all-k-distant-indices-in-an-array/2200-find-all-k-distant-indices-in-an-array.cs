public class Solution {
    public IList<int> FindKDistantIndices(int[] nums, int key, int k) {
        bool [] map = new bool[1001];
        for(int idx = 0; idx < nums.Length; idx++)
        {
            if(nums[idx] == key)
            {
                helper(idx, k, map, nums.Length);        
            }
        }
        var result = new List<int>();
        for(int idx = 0; idx < 1001; idx++)
        {
            if(map[idx] == true)
            {
                result.Add(idx);
            }
        }
        return result.ToArray();
    }

    private void helper(int index, int k, bool [] map, int n)
    {
        int i = index - 1;
        int j = index + 1;
        while(i >= 0 && Math.Abs(i - index) <= k) {
            map[i] = true;
            i--;
        }

        while(j < n && Math.Abs(j - index) <= k) {
            map[j] = true;
            j++;
        }
        
        map[index] = true;
    }
}