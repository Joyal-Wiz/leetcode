public class Solution {
    public string FrequencySort(string s) {
        Dictionary<char,int> freq = new Dictionary<char,int>();

        foreach(char ch in s) {
            if(freq.ContainsKey(ch)) {
                freq[ch]++;
            } else {
                freq[ch] = 1;
            }
        }

        var sorted = freq.OrderByDescending(x => x.Value);

        StringBuilder sb = new StringBuilder();
        foreach(var word in sorted) {
            sb.Append(new string(word.Key, word.Value));
        }

        return sb.ToString();
    }
}