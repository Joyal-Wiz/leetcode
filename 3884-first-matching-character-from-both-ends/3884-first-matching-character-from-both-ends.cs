public class Solution {
    public int FirstMatchingIndex(string s, int i = 0) => s[i] != s[^(i + 1)]
        ? i < s.Length / 2 
            ? FirstMatchingIndex(s, i + 1)
            : -1
        : i;
}