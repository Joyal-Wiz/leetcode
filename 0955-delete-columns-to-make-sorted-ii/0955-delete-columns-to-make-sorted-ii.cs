public class Solution
{
    public int MinDeletionSize(string[] strs)
    {
        int n = strs.Length;
        int m = strs[0].Length;

        bool[] sorted = new bool[n - 1];
        int deletions = 0;

        for (int col = 0; col < m; col++)
        {
            bool needDelete = false;

            for (int row = 0; row < n - 1; row++)
            {
                if (!sorted[row] && strs[row][col] > strs[row + 1][col])
                {
                    needDelete = true;
                    break;
                }
            }

            if (needDelete)
            {
                deletions++;
                continue;
            }

            for (int row = 0; row < n - 1; row++)
            {
                if (!sorted[row] && strs[row][col] < strs[row + 1][col])
                {
                    sorted[row] = true;
                }
            }
        }

        return deletions;
    }
}
