public class Solution {
public string ThousandSeparator(int n) => 
    String.Format("{0:#,##0}", n).Replace(',','.');
}