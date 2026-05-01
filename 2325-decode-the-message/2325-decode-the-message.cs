public class Solution
{
    public string DecodeMessage(string key, string message)
    {
        int y = 97;
        StringBuilder s=new StringBuilder();
        Dictionary<char,char> d = new Dictionary<char,char>();
        foreach (char x in key)
        {
            if (x!=' ' && !d.ContainsKey(x))
            {
                d.Add(x, (char)y);
                y++;
            }
        }
        foreach (char x in message)
        {
            if (x != ' ')
            {
                s.Append(d[x]);
            }
            else
                s.Append(' ');
        }
        return s.ToString();
    }
}