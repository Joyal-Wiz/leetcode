function maximumHappinessSum(happiness: number[], k: number): number {
     happiness.sort((a, b) => a - b);

    let res = 0;
    let n = happiness.length;

    for (let i = n - 1, picked = 0; picked < k; i--, picked++) {
        const val = happiness[i] - picked;
        if (val > 0) res += val;
    }

    return res;
};