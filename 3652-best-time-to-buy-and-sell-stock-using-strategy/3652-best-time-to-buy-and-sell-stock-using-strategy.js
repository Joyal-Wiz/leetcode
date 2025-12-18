/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
 var maxProfit = function (prices, strategy, k) {
    const n = prices.length;
    const half = k >> 1;

    // Original total profit
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += strategy[i] * prices[i];
    }

    let maxProfit = total;

    // Sliding window sums
    let oldWindow = 0;   // original strategy contribution
    let newWindow = 0;   // modified contribution (last half sells)

    // Initial window
    for (let i = 0; i < k; i++) {
        oldWindow += strategy[i] * prices[i];
        if (i >= half) newWindow += prices[i];
    }

    maxProfit = Math.max(maxProfit, total - oldWindow + newWindow);

    // Slide window
    for (let i = k; i < n; i++) {
        // remove left
        oldWindow -= strategy[i - k] * prices[i - k];
        if (i - k + half >= i - k)
            newWindow -= prices[i - k + half];

        // add right
        oldWindow += strategy[i] * prices[i];
        newWindow += prices[i];

        maxProfit = Math.max(maxProfit, total - oldWindow + newWindow);
    }

    return maxProfit;
};
