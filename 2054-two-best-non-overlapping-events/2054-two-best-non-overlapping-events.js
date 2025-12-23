/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
 events.sort((a, b) => a[1] - b[1]);

    const n = events.length;
    const endT = new Array(n);
    const best = new Array(n);

    for (let i = 0; i < n; i++) {
        endT[i] = events[i][1];
        best[i] = events[i][2];
        if (i > 0) best[i] = Math.max(best[i], best[i - 1]);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        const st = events[i][0];
        const val = events[i][2];

        let l = 0, r = n - 1, idx = -1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (endT[mid] < st) {
                idx = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        if (idx !== -1) ans = Math.max(ans, val + best[idx]);
        ans = Math.max(ans, val);
    }

    return ans;
};