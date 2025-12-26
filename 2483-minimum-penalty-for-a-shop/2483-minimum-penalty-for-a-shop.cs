public class Solution {
    public int BestClosingTime(string customers) {
        int pen = 0;
        foreach (char c in customers)
            if (c == 'Y') pen++;

        int best = pen, ans = 0;

        for (int i = 0; i < customers.Length; i++) {
            if (customers[i] == 'Y')
                pen--;  
            else
                pen++;  

            if (pen < best) {
                best = pen;
                ans = i + 1;
            }
        }
        return ans;
    }
}
