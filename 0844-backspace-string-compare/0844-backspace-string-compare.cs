public class Solution {
    public bool BackspaceCompare(string S, string T) {
        char[] sChars = S.ToCharArray();
        char[] tChars = T.ToCharArray();
        
        int k = ProcessString(sChars);
        int p = ProcessString(tChars);

        if (k != p) return false;

        for (int i = 0; i < k; i++) {
            if (sChars[i] != tChars[i]) return false;
        }

        return true;
    }

    private int ProcessString(char[] chars) {
        int k = 0;
        foreach (char c in chars) {
            if (c != '#') {
                chars[k++] = c;
            } else if (k > 0) {
                k--;
            }
        }
        return k;
    }
}