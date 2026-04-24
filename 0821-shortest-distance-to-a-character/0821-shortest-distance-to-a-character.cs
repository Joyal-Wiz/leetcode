public class Solution {
    public int[] ShortestToChar(string s, char c) {
        var result = new int[s.Length];

var distance = s.Length;
for (int i = 0; i < s.Length; i++)
{
    if (s[i] == c)
    {
        result[i] = 0;
        distance = 1;
    }
    else
    {
        if (result[i] < distance)
            result[i] = distance++;
    }
}

distance = s.Length;
for (int i = s.Length - 1; i >= 0; i--)
{
    if (s[i] == c)
        distance = 1;
    else
    {
        if (result[i] > distance)
            result[i] = distance++;
    }
}

return result;
    }
}