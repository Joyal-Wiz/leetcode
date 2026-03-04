public class Solution {
    public int FindPermutationDifference(string s, string t) {
        int res = 0;
        for(int i = 0; i < s.Length; i++){
            res += Math.Abs(i - t.IndexOf(s[i]));
        }
        return res;
    }
}