/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
let res = prices.length;
let streak = 1;
for (let i = 1; i < prices.length; i++) {
  if (prices[i - 1] - prices[i] === 1) {
    streak++;
  } else {
    res += (streak * (streak - 1)) / 2;
    streak = 1;
  }
}
res += (streak * (streak - 1)) / 2;

return res;

};