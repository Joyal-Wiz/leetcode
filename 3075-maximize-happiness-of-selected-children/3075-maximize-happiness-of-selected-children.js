/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
     happiness.sort((a, b) => a - b); 

    let ans = 0;
    let n = happiness.length;

    for (let i = 0; i < k; i++) {
        let val = happiness[n - 1 - i] - i;
        if (val <= 0) break;
        ans += val;
    }
    return ans;
};