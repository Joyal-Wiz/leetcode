public class Solution {
    public bool WordPattern(string pattern, string s) {
        Dictionary<char, string> map= new Dictionary<char,string>();
        var words = s.Split(' ');
        if(pattern.Length != words.Length){
            return false;
        }

        for(int i=0;i<pattern.Length;i++){
            if(map.ContainsKey(pattern[i])){
                if(map[pattern[i]]!=words[i]){
                    return false;
                }
            }else{
                    if (map.ContainsValue(words[i])){
                        return false;
                    }
                    map.Add(pattern[i], words[i]);
                }
            }
        return true;
    }
}