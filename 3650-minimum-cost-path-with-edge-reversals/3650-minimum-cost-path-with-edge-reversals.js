/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function(n, edges) {
const edgeMap = new Map(); // node -> { node, weight }
    for (let i = 0; i < n; i++) {
        edgeMap.set(i, []);
    }

    for (var edge of edges) {
        const [from, to, weight] = edge;
        edgeMap.get(from).push({ node: to, weight });
        edgeMap.get(to).push({ node: from, weight: weight * 2 });
    }

    const visited = new Set();
    const heap = new MinHeap((node) => node.cost);
    heap.push({ node: 0, cost: 0 });

    while (heap.size() > 0) {
        const { node, cost } = heap.pop();
        if (visited.has(node)) continue;
        if (node === n - 1) return cost;

        visited.add(node);

        const connectedEdges = edgeMap.get(node);
        for (var edge of connectedEdges) {
            heap.push({ node: edge.node, cost: cost + edge.weight})
        }
    }

    return -1;

};