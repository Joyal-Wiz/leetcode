public class Solution {
    public int[][] RotateGrid(int[][] grid, int k) {
        int m = grid.Length;
        int n = grid[0].Length;
        int nlayer = Math.Min(m / 2, n / 2); 
        for (int layer = 0; layer < nlayer; ++layer) {
            List<int> r = new List<int>();
            List<int> c = new List<int>();
            List<int> val = new List<int>();  
            for (int i = layer; i < m - layer - 1; ++i) { 
                r.Add(i);
                c.Add(layer);
                val.Add(grid[i][layer]);
            }
            for (int j = layer; j < n - layer - 1; ++j) { 
                r.Add(m - layer - 1);
                c.Add(j);
                val.Add(grid[m - layer - 1][j]);
            }
            for (int i = m - layer - 1; i > layer; --i) {  
                r.Add(i);
                c.Add(n - layer - 1);
                val.Add(grid[i][n - layer - 1]);
            }
            for (int j = n - layer - 1; j > layer; --j) { 
                r.Add(layer);
                c.Add(j);
                val.Add(grid[layer][j]);
            }
            int total = val.Count;  
            int kk = k % total;    
            for (int i = 0; i < total; ++i) {
                int idx =
                    (i + total - kk) % total; 
                                              
                grid[r[i]][c[i]] = val[idx];
            }
        }
        return grid;
    }
}