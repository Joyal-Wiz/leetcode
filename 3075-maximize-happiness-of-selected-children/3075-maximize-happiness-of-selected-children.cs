public class Solution {
    public long MaximumHappinessSum(int[] happiness, int k) {
        Array.Sort(happiness);

        long result = 0;
        int decrease = 0;
        int n = happiness.Length;

        // Pick from largest to smallest
        for (int i = n - 1; i >= n - k; i--)
        {
            int current = happiness[i] - decrease;
            if (current > 0)
            {
                result += current;
            }
            decrease++;
        }

        return result;
    }
}