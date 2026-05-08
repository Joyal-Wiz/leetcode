public class Solution {
    public int CountAsterisks(string s){
        string[] str = s.Split('|');
        int count=0;

        for(int i=0;i<str.Length;i=i+2)
        {
            for(int j=0;j<str[i].Length;j++)
            {
                if(str[i][j]=='*')
                {
                    count++;
                }
            }
        }
        return count;    
    }
}