public class Solution {
    public int[] Intersect(int[] nums1, int[] nums2) {
        List<int> list = new List<int>();
        List<int> nums2temp = new List<int>(nums2); 
        
        foreach(int num in nums1)
        {
            if(nums2temp.Contains(num))
            {
                list.Add(num);
                nums2temp.Remove(num);
            }
        }

        return list.ToArray();
    }
}