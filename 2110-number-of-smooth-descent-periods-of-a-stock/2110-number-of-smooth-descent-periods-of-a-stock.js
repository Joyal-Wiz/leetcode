/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let res = prices.length;
    for(let i = 0; i < prices.length; i++) {
        let j = i + 1;
        while (j < prices.length && prices[j - 1] - prices[j] === 1) {j++;}
        const len = j - i;
        res += len * (len - 1) / 2;
        i = j - 1;
    }

    return res;
};