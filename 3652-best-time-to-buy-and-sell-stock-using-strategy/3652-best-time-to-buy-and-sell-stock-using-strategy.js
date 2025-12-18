/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
    const n = prices.length;
    const half = Math.floor(k / 2);
    
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + strategy[i] * prices[i];
    }
    let windowSum = 0;
    for (let i = half; i < k; i++) {
        windowSum += prices[i];
    }
    let maxProfit = Math.max(prefixSum[n], windowSum + prefixSum[n] - prefixSum[k]);
    for (let start = 1; start + k <= n; start++) {
        windowSum += prices[start + k - 1] - prices[start + half - 1];
        maxProfit = Math.max(maxProfit, windowSum + prefixSum[n] - prefixSum[start + k] + prefixSum[start]);
    }
    
    return maxProfit;
};