public class Solution {
    public int MaxTwoEvents(int[][] events) {
         int n = events.Length;

        Array.Sort(events, (a, b) => a[0].CompareTo(b[0]));

        int[] start = new int[n];
        int[] end = new int[n];
        int[] val = new int[n];

        for (int i = 0; i < n; i++)
        {
            start[i] = events[i][0];
            end[i] = events[i][1];
            val[i] = events[i][2];
        }

        int[] suffixMax = new int[n];
        suffixMax[n - 1] = val[n - 1];

        for (int i = n - 2; i >= 0; i--)
        {
            suffixMax[i] = Math.Max(val[i], suffixMax[i + 1]);
        }

        int ans = 0;

        for (int i = 0; i < n; i++)
        {
            int l = i + 1, r = n;

            while (l < r)
            {
                int m = l + ((r - l) >> 1);
                if (start[m] > end[i])
                    r = m;
                else
                    l = m + 1;
            }

            if (l < n)
            {
                ans = Math.Max(ans, val[i] + suffixMax[l]);
            }

            ans = Math.Max(ans, val[i]);
        }

        return ans;
    }
}