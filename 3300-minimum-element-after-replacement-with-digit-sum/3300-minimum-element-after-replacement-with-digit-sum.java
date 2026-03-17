class Solution {
    public int calsum(int num) {
        String str = String.valueOf(num);
        int res = 0;
        for (var it : str.toCharArray()) {
            res += it - '0';
        }
        return res;
    }

    public int minElement(int[] nums) {
        int res = Integer.MAX_VALUE;

        for (int it : nums) {
            int x = calsum(it);
            if (x < res) {
                res = x;
            }
        }
        return res;
    }
}