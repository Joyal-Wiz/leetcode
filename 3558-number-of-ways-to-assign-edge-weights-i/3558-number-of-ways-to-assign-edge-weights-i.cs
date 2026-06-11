public class Solution 
{
    private const int MOD = 1_000_000_007;
    
    public int AssignEdgeWeights(int[][] edges) 
    {
        int n = edges.Length + 1;
        var adj = new List<int>[n + 1];
        for (int i = 1; i <= n; i++) adj[i] = new List<int>();
        foreach (var e in edges)
        {
            int u = e[0], v = e[1];
            adj[u].Add(v);
            adj[v].Add(u);
        }
        
        var visited = new bool[n + 1];
        var queue = new Queue<(int node, int depth)>();
        visited[1] = true;
        queue.Enqueue((1, 0));
        
        int maxDepth = 0;
        while (queue.Count > 0)
        {
            var (u, d) = queue.Dequeue();
            maxDepth = Math.Max(maxDepth, d);
            foreach (int v in adj[u])
            {
                if (!visited[v])
                {
                    visited[v] = true;
                    queue.Enqueue((v, d + 1));
                }
            }
        }
        
         return (int)ModPow(2, maxDepth - 1, MOD);
    }

    private long ModPow(long _base, long exp, int mod)
        {
            long result = 1;
            long b = _base % mod;
            while (exp > 0)
            {
                if ((exp & 1) == 1) result = (result * b) % mod;
                b = (b * b) % mod;
                exp >>= 1;
            }
            return result;
        }
}