/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */var maximumProfit = function (prices, k) {
    const n = prices.length;
    const buy = Array(k + 1).fill(-Infinity);
    const sell = Array(k + 1).fill(-Infinity);
    const done = Array(k + 1).fill(0);

    for (let price of prices) {
        for (let t = k; t >= 1; t--) {
            buy[t] = Math.max(buy[t], done[t - 1] - price);
            sell[t] = Math.max(sell[t], done[t - 1] + price);

            done[t] = Math.max(
                done[t],
                buy[t] + price,
                sell[t] - price
            );
        }
    }

    return done[k];
};
