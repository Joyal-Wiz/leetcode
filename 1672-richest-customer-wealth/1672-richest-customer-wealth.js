/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
let max = 0;

    for (let i of accounts) {
        let sum = i.reduce((a, b) => a + b, 0);
        max = Math.max(max, sum);
    }

    return max;};