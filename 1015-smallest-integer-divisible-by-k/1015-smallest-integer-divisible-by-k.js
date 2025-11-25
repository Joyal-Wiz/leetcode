/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let rem = 0;
    for (let len = 1; len <= k; len++) {
        rem = (rem * 10 + 1) % k;
        if (rem === 0) {

        return len;
        }
    }
    return -1;
};