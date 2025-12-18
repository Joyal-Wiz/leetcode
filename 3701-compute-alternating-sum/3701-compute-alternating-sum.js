/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i % 2 === 0)
                count += nums[i];
            else
                count -= nums[i];
        }
        return count;
};