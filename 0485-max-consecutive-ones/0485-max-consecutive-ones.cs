public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        var maxCount = 0;
        var tempCount = 0;
        foreach(int n in nums){
            if(n == 1) {
                tempCount++;
            }
            else {
                maxCount = tempCount > maxCount ? tempCount : maxCount;
                tempCount = 0;
            }
        }
        maxCount = tempCount > maxCount ? tempCount : maxCount;
        return maxCount;
    }
}