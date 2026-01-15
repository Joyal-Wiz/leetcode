/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
nums.sort((a, b) => a - b); 
    let result = [];

    for (let i = 0; i < nums.length; i += 2) {
        let alice = nums[i];
        let bob = nums[i + 1];

        result.push(bob);
        result.push(alice);
    }

    return result;
};