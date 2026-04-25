public class Solution {
    public bool IsPrefixString(string s, string[] words) {
        string all = "";
        foreach(string w in words) {
            all += w;   
            if (all == s) {
                return true;
            }
        }
        return false;
    }
}