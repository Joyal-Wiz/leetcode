public class Solution {
    public int MinDeletionSize(string[] strs) {
        int del = 0;
    int rows = strs.Length;
    int cols = strs[0].Length;

    for (int c = 0; c < cols; c++)
    {
        int prev = strs[0][c];  

        for (int r = 1; r < rows; r++)
        {
            int curr = strs[r][c];

            if (curr < prev)
            {
                del++;
                break;
            }

            prev = curr;
        }
    }

    return del;
    }
}