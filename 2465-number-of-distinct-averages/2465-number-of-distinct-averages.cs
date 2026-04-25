public class Solution {
    public int DistinctAverages(int[] nums) {
        Array.Sort(nums);
        HashSet<double> my=new();
        for(int i=0;i<nums.Length/2;i++)
            my.Add((double)(nums[i]+nums[nums.Length-i-1])/2);
        return my.Count;
    }
}