function maxProfit(n: number, present: number[], future: number[], hierarchy: number[][], budget: number): number {
     const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 2 }, () => new Array(budget + 1).fill(0))
  );

  const children = Array.from({ length: n + 1 }, () => []);
  const deg = new Array(n + 1).fill(0);
  const parent = new Array(n + 1).fill(0);
  for (const [p, c] of hierarchy) {
    children[p].push(c);
    deg[p]++;
    parent[c] = p;
  }
  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (deg[i] === 0) queue.push(i);
  }

  let qi = 0;
  while (qi < queue.length) {
    const curr = queue[qi++];

    for (let s = 0; s <= 1; s++) {
      const price = present[curr - 1] >> s;
      let skip = new Array(budget + 1).fill(0);
      let take = new Array(budget + 1).fill(Number.NEGATIVE_INFINITY);

      for (let b = price; b <= budget; b++) {
        take[b] = future[curr - 1] - price;
      }
      for (const child of children[curr]) {
        const dpChildSkip = dp[child][0];
        const dpChildTake = dp[child][1];

        const newSkip = new Array(budget + 1).fill(Number.NEGATIVE_INFINITY);
        const newTake = new Array(budget + 1).fill(Number.NEGATIVE_INFINITY);

        for (let b = 0; b <= budget; b++) {
          if (skip[b] !== Number.NEGATIVE_INFINITY) {
            const maxSpend = Math.min(budget - b, budget);
            for (let spend = 0; spend <= maxSpend; spend++) {
              newSkip[b + spend] = Math.max(
                newSkip[b + spend],
                skip[b] + dpChildSkip[spend]
              );
            }
          }

          if (take[b] !== Number.NEGATIVE_INFINITY) {
            const maxSpend = Math.min(budget - b, budget);
            for (let spend = 0; spend <= maxSpend; spend++) {
              newTake[b + spend] = Math.max(
                newTake[b + spend],
                take[b] + dpChildTake[spend]
              );
            }
          }
        }

        skip = newSkip;
        take = newTake;
      }
      for (let b = 0; b <= budget; b++) {
        dp[curr][s][b] = Math.max(skip[b], take[b]);
      }
    }

    const p = parent[curr];
    if (p !== 0 && --deg[p] === 0) {
      queue.push(p);
    }
  }

  return dp[1][0][budget];
};