function minDeletionSize(strs: string[]): number {
    const rows = strs.length;
    const cols = strs[0].length;

    const ok = Array.from({ length: cols }, () => Array(cols).fill(true));

    for (let j = 0; j < cols; j++) {
        for (let c = j + 1; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                if (strs[r][j] > strs[r][c]) {
                    ok[j][c] = false;
                    break;
                }
            }
        }
    }

    const dp = Array(cols).fill(1);
    let best = 1;

    for (let c = 0; c < cols; c++) {
        for (let j = 0; j < c; j++) {
            if (ok[j][c]) {
                dp[c] = Math.max(dp[c], dp[j] + 1);
            }
        }
        best = Math.max(best, dp[c]);
    }

    return cols - best;
};