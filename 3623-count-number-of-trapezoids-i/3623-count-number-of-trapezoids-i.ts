function countTrapezoids(points: number[][]): number {
    const MOD = BigInt(1_000_000_007);
    const mp = new Map();   
    let sumPairs = BigInt(0);

    for (let p of points) {
        let y = p[1];
        let f = mp.get(y) || 0;
        sumPairs += BigInt(f);
        mp.set(y, f + 1);
    }

    let res = BigInt(0);

    for (let y of mp.keys()) {
        let f = mp.get(y);
        let cur = BigInt(f * (f - 1) / 2);
        sumPairs -= cur;
        res += sumPairs * cur;
    }

    return Number(res % MOD);

};