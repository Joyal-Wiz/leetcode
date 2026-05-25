public class Solution {
    int[] dp;
    int n;

    public int MaxJumps(int[] arr, int d) {
        n = arr.Length;
        dp = new int[n];

        int ans = 1;

        for (int i = 0; i < n; i++) {
            ans = Math.Max(ans, Dfs(i, arr, d));
        }

        return ans;
    }

    private int Dfs(int i, int[] arr, int d) {
        if (dp[i] != 0)
            return dp[i];

        int best = 1;

        for (int j = i + 1; j <= Math.Min(n - 1, i + d); j++) {
            if (arr[j] >= arr[i])
                break;

            best = Math.Max(best, 1 + Dfs(j, arr, d));
        }
        for (int j = i - 1; j >= Math.Max(0, i - d); j--) {
            if (arr[j] >= arr[i])
                break;

            best = Math.Max(best, 1 + Dfs(j, arr, d));
        }

        dp[i] = best;
        return best;
    }
}