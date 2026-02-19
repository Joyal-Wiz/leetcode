function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
    const MOD = 1000000007n;

    hFences.push(1, m);
    vFences.push(1, n);

    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);

    if (hFences.length > vFences.length) {
        [hFences, vFences] = [vFences, hFences];
    }

    const set = new Set<number>();
    for (let i = 0; i < hFences.length; i++) {
        for (let j = i + 1; j < hFences.length; j++) {
            set.add(hFences[j] - hFences[i]);
        }
    }

    let maxSide = 0;

    for (let i = 0; i < vFences.length; i++) {
        for (let j = i + 1; j < vFences.length; j++) {
            const d = vFences[j] - vFences[i];
            if (d > maxSide && set.has(d)) {
                maxSide = d;
            }
        }
    }

    if (maxSide === 0) return -1;

    const x = BigInt(maxSide);
    return Number((x * x) % MOD);
}
