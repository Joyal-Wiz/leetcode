function repeatedNTimes(nums: number[]): number {
return nums.find(val => nums.indexOf(val) !== nums.lastIndexOf(val));
};