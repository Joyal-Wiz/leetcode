function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
    const MOD = 1000000007n;
    hFences.push(1, m);
    vFences.push(1, n);
    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);

    const hs = new Set();
    for (let i = 0; i < hFences.length; i++) {
        for (let j = i + 1; j < hFences.length; j++) {
            hs.add(hFences[j] - hFences[i]);
        }
    }

    let s = 0;
    for (let i = 0; i < vFences.length; i++) {
        for (let j = i + 1; j < vFences.length; j++) {
            const d = vFences[j] - vFences[i];
            if (d > s && hs.has(d)) s = d;
        }
    }

    if (s === 0) return -1;
    const x = BigInt(s);
    return Number((x * x) % MOD);

};