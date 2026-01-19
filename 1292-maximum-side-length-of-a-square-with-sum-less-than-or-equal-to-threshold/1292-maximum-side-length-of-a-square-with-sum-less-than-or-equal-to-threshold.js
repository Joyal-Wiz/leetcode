/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
const n = mat.length;
    const m = mat[0].length;
    const pref = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            pref[i][j] = mat[i][j];
            if (i > 0) pref[i][j] += pref[i - 1][j];
            if (j > 0) pref[i][j] += pref[i][j - 1];
            if (i > 0 && j > 0) pref[i][j] -= pref[i - 1][j - 1];
        }
    }

    function isValid(k) {
        for (let i = k - 1; i < n; i++) {
            for (let j = k - 1; j < m; j++) {
                let sum = pref[i][j];
                if (i - k >= 0) sum -= pref[i - k][j];
                if (j - k >= 0) sum -= pref[i][j - k];
                if (i - k >= 0 && j - k >= 0) sum += pref[i - k][j - k];

                if (sum <= threshold) return true;
            }
        }
        return false;
    }

    let low = 1, high = Math.min(n, m);
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isValid(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;

};