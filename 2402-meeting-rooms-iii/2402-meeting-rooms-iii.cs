public class Solution {
    public int MostBooked(int n, int[][] meetings) {
        Array.Sort(meetings, (a, b) => a[0].CompareTo(b[0]));

        int[] count = new int[n];
        long[] timer = new long[n]; 

        int itr = 0;

        while (itr < meetings.Length)
        {
            int start = meetings[itr][0];
            int end = meetings[itr][1];
            int dur = end - start;

            int room = -1;
            long earliest = long.MaxValue;
            int earliestRoom = -1;

            for (int i = 0; i < n; i++)
            {
                if (timer[i] < earliest)
                {
                    earliest = timer[i];
                    earliestRoom = i;
                }

                if (timer[i] <= start)
                {
                    room = i;
                    break;
                }
            }

            if (room != -1)
            {
                timer[room] = end;
                count[room]++;
            }
            else
            {
                timer[earliestRoom] += dur;
                count[earliestRoom]++;
            }

            itr++;
        }

        int max = 0, idx = 0;
        for (int i = 0; i < n; i++)
        {
            if (count[i] > max)
            {
                max = count[i];
                idx = i;
            }
        }

        return idx;
    }
}