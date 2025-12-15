/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
let res = prices.length;
let count = 1;

for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] === prices[i] + 1) {
        count++;
    } else {
        res += (count * (count - 1)) / 2;
        count = 1;
    }
}

res += (count * (count - 1)) / 2;
return res;

};