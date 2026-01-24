function minPairSum(nums: number[]): number {
let biggest = 0;
    for (const num of nums) {
        if (num > biggest) {
            biggest = num;
        }
    }

    const freq = Array(biggest + 1).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    let i = 0, j = biggest;
    while (i <= biggest && freq[i] === 0) i++;
    while (j >= 0 && freq[j] === 0) j--;
    let best = 0;
    for (let p = nums.length / 2; p > 0; p--) {
        best = Math.max(best, i + j);
        freq[i]--;
        freq[j]--;
        if (freq[i] === 0) {
            while (i <= biggest && freq[i] === 0) i++;
        }
        if (freq[j] === 0) {
            while (j >= 0 && freq[j] === 0) j--;
        }
    }
    return best;
};