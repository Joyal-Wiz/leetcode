public class Solution {
    public bool IsHappy(int n) {
        HashSet<int> seen = new HashSet<int>();
        while (n != 1) {
            if (seen.Contains(n)) return false;
            seen.Add(n);
            int res = 0;
            while (n > 0) {
                int rem = n % 10;
                res += rem * rem;
                n /= 10;
            }
            n = res;
        }
        return true;
    }
}