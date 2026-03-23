/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
let res = nums.length % 2 ? nums[(nums.length - 1) / 2] : 0;
    for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
        res += +`${nums[l]}${nums[r]}`;
    }
    return res;
};