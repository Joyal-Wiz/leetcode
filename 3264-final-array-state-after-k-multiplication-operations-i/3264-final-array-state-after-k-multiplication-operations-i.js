/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  for (let j = 0; j < k; j++) {
    let small = nums[0];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < small) {
        small = nums[i];
        index = i;
      }
    }

    nums[index] = small * multiplier;
  }

  return nums;
};