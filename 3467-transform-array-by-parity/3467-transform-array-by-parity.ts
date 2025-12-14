function transformArray(nums: number[]): number[] {
    return nums.map(n => n % 2).sort((a, b) => a - b);

};