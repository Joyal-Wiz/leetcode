public class Solution {
    public string ToHex(int num) {
         if (num == 0) return "0";

 var map = "0123456789abcdef";
 var sb = new StringBuilder();
 while (num != 0 && sb.Length < 8)
 {
     sb.Append(map[num & 15]);
     num >>= 4;
 }

 return new string(sb.ToString().ToCharArray().Reverse().ToArray());
    }
}