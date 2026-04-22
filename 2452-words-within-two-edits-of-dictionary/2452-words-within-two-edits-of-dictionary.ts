function twoEditWords(queries: string[], dictionary: string[]): string[] {
    const ans: string[] = [];

    for (const q of queries) {
        for (const d of dictionary) {
            let diff = 0;

            for (let i = 0; i < q.length; i++) {
                if (q[i] !== d[i]) {
                    diff++;
                }

                if (diff > 2) break;
            }

            if (diff <= 2) {
                ans.push(q);
                break;
            }
        }
    }

    return ans;
}