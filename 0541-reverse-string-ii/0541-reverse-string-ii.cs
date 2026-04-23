public class Solution {
    public string ReverseStr(string s, int k)
    {
        char[] arr = s.ToCharArray();
        int length = arr.Length;
        
        for (int i = 0; i < length; i += 2 * k)
            Array.Reverse(arr,i, Math.Min(k, s.Length - i));
        
        return new string(arr);
    }
}