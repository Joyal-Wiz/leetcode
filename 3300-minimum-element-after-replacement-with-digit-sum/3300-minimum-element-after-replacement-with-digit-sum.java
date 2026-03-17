class Solution {
    public int minElement(int[] nums) {
        int k = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length; i++){
            int sum = digitSum(nums[i]);
            if (k > sum) k = sum;
        }
        return k;
    }
    public static int digitSum(int n){
        int s = 0;
        while (n > 0){
            s = s + (n % 10);
            n /= 10;
        }
        return s;
    }
}