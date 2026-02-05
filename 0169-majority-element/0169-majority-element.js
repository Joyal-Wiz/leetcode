/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let h = nums[0];
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            h = num;
        }

        count += (num === h) ? 1 : -1;
    }

    return h;

};