public class Solution {
    public int MaxCount(int m, int n, int[][] ops) {
         foreach (var op in ops)
         {
             m = Math.Min(m, op[0]);
             n = Math.Min(n, op[1]);
         }

         return m * n;
    }
}