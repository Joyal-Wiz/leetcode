/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const n = nums.length;
    if (n < 2) return 0;

    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    if (min === max) return 0;

    const bucketSize = Math.max(1, Math.floor((max - min) / (n - 1)));
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const bucketsMin = new Array(bucketCount).fill(Infinity);
    const bucketsMax = new Array(bucketCount).fill(-Infinity);

    for (let x of nums) {
        const idx = Math.floor((x - min) / bucketSize);
        bucketsMin[idx] = Math.min(bucketsMin[idx], x);
        bucketsMax[idx] = Math.max(bucketsMax[idx], x);
    }

    let maxGap = 0;
    let prevMax = min;

    for (let i = 0; i < bucketCount; i++) {
        if (bucketsMin[i] === Infinity) continue;

        maxGap = Math.max(maxGap, bucketsMin[i] - prevMax);
        prevMax = bucketsMax[i];
    }

    return maxGap;
};