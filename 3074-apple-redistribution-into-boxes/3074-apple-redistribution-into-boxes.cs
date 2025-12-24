public class Solution
{
    public int MinimumBoxes(int[] apple, int[] capacity)
    {
        int tot = 0;
        foreach (int a in apple)
            tot += a;

        Array.Sort(capacity, (a, b) => b - a);

        int hello = 0;

        while (tot > 0)
        {
            tot -= capacity[hello++];
        }

        return hello;
    }
}
