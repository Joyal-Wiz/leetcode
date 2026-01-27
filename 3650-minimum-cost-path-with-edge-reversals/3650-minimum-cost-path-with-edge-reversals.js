/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, 2 * w]);
    }

    class MinHeap {
        constructor() { 
            this.h = [];
        }
        less(a, b) {
            return a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
        }
        push(x) {
            const h = this.h;
            h.push(x);
            let i = h.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (this.less(h[p], h[i])) 
                    break;
                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        }
        pop() {
            const h = this.h;
            const res = h[0];
            const last = h.pop();
            if (h.length) {
                h[0] = last;
                let i = 0;
                while (true) {
                    let l = i * 2 + 1, r = l + 1, s = i;
                    if (l < h.length && this.less(h[l], h[s])) s = l;
                    if (r < h.length && this.less(h[r], h[s])) s = r;
                    if (s === i) 
                        break;
                    [h[s], h[i]] = [h[i], h[s]];
                    i = s;
                }
            }
            return res;
        }
        size() { return this.h.length; }
    }

    const ans = new Array(n).fill(Infinity);
    ans[0] = 0;

    const pq = new MinHeap();
    pq.push([0, 0]); 

    while (pq.size()) {
        const [weight, node] = pq.pop();
        if (weight > ans[node]) 
            continue;

        for (const [nd, wt] of graph[node]) {
            if (wt + weight < ans[nd]) {
                ans[nd] = wt + weight;
                pq.push([ans[nd], nd]);
            }
        }
    }

    return ans[n - 1] === Infinity ? -1 : ans[n - 1];

};