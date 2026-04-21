function minimumHammingDistance(
    source: number[],
    target: number[],
    allowedSwaps: number[][]
): number {

    const n = source.length;
    const parent: number[] = new Array(n);

    for (let i = 0; i < n; i++) parent[i] = i;

    const find = (x: number): number => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    const unite = (a: number, b: number): void => {
        parent[find(a)] = find(b);
    };

    for (const [a, b] of allowedSwaps) {
        unite(a, b);
    }

    const groups = new Map<number, Map<number, number>>();

    for (let i = 0; i < n; i++) {
        const root = find(i);

        if (!groups.has(root)) {
            groups.set(root, new Map());
        }

        const freq = groups.get(root)!;
        freq.set(source[i], (freq.get(source[i]) || 0) + 1);
    }

    let hammingDist = 0;

    for (let i = 0; i < n; i++) {
        const root = find(i);
        const freq = groups.get(root)!;

        if ((freq.get(target[i]) || 0) > 0) {
            freq.set(target[i], freq.get(target[i])! - 1);
        } else {
            hammingDist++;
        }
    }

    return hammingDist;
}