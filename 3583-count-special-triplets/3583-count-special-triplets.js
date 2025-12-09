/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    let result = 0;
    const prefixCount = new Map();
    const suffixCount = new Map();
    for (const num of nums) {
        suffixCount.set(num, (suffixCount.get(num) || 0) + 1);
    }

    for (const mid of nums) {
        suffixCount.set(mid, suffixCount.get(mid) - 1);
        const target = mid * 2;
        const left = prefixCount.get(target) || 0;
        const right = suffixCount.get(target) || 0;

        result = (result + left * right) % MOD;
        prefixCount.set(mid, (prefixCount.get(mid) || 0) + 1);
    }

    return result;
};