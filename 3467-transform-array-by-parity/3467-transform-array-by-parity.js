/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
return nums.map(n => n % 2).sort((a, b) => a - b);
};