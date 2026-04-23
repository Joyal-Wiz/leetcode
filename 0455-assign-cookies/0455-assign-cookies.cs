public class Solution {
    public int FindContentChildren(int[] g, int[] s) {
        Array.Sort(g);
        Array.Sort(s);

        int i = 0, j = 0, count = 0;

        while (i < g.Length && j < s.Length) {
            if (g[i] <= s[j]) {
                count++;
                i++;
                j++;
            } else if (g[i] > s[j]) {
                j++;
            } else {
                i++;
            }
        }

        return count;
    }
}