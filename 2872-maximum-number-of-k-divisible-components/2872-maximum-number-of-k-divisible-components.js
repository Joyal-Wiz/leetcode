/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
      const graph = Array.from({ length: n }, () => []);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let count = 0; 

    function dfs(node, parent) {
        let sum = values[node]; 
        for (let child of graph[node]) {
            if (child !== parent) {
                sum += dfs(child, node); 
            }
        }
        if (sum % k === 0) {
            count++;
        }
        return sum % k;
    }

    dfs(0, -1); 

    return count;
};