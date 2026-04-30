public class Solution {
    public string ConvertToBase7(int num) {
        if (num == 0) return "0";

           var signal = num < 0;
           if (num < 0) num = -num;

           var sb = new StringBuilder();
           while (num > 0)
           {
               sb.Append((num % 7).ToString());
               num /= 7;
           }
           if (signal)
               sb.Append('-');

           return new string(sb.ToString().Reverse().ToArray());
    }
}