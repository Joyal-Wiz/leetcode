public class Solution {
    public string[] FindRelativeRanks(int[] score) {
        string[] Places = new string[score.Length];
        Dictionary<int, int> Pq = new Dictionary<int, int>();
        for (int i = 0; i < score.Length; i++)
        {
            Pq.Add(score[i],i);
        }

        Array.Sort(score,(x,y)=> y.CompareTo(x));
        for (int i = 0; i < score.Length; i++)
        {
            int j = i + 1;
            if(i == 0)
            {
                Places[Pq[score[i]]] = "Gold Medal";
            }
            else if(i == 1)
            {
                Places[Pq[score[i]]] = "Silver Medal";
            }
            else if(i == 2)
            {
                Places[Pq[score[i]]] = "Bronze Medal";
            }
            else
            {
                Places[Pq[score[i]]] = j.ToString();
            }
        }
        return Places;
    }
}