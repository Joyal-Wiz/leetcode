/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const f = (i, j, s) => {
        s = (s + grid[i][j]) % k
        if (dp[i][j][s] >= 0)
            return dp[i][j][s]
        if (i == 0 && j == 0)
            dp[i][j][s] = s? 0: 1
        else if (i == 0)
            dp[i][j][s] = f(i, j - 1, s)
        else if (j == 0)
            dp[i][j][s] = f(i - 1, j, s)
        else
            dp[i][j][s] = (f(i - 1, j, s) + f(i, j - 1, s)) % mod
        return dp[i][j][s]
    }

    let mod = 1000000007,
        n = grid.length, m = grid[0].length,
        dp = Array.from(Array(n), () => Array.from(Array(m), () => Array(k).fill(-1)))
    return f(n - 1, m - 1, 0)
};