public class Solution {
    public bool ContainsNearbyDuplicate(int[] nums, int k) {
        var window = new HashSet<int>();
        for (int r=0; r<nums.Length; r++){
           if(r>k) window.Remove(nums[r-k-1]);
           if(!window.Add(nums[r])) return true;
        }
        return false;
    }
}