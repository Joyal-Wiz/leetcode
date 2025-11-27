/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
  let prefix = 0;
    let ans = -Infinity;
    const best = Array(k).fill(Infinity);
    best[0] = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        const r = (i + 1) % k;
        ans = Math.max(ans, prefix - best[r]);
        best[r] = Math.min(best[r], prefix);
    }

    return ans;
};