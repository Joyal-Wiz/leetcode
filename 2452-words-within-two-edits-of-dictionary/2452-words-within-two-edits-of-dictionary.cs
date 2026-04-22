public class Solution {
    public IList<string> TwoEditWords(string[] queries, string[] dictionary) {
        List<string> ans = new List<string>();

        foreach (string q in queries) {
            foreach (string d in dictionary) {
                int diff = 0;

                for (int i = 0; i < q.Length; i++) {
                    if (q[i] != d[i]) {
                        diff++;
                    }

                    if (diff > 2) break;
                }

                if (diff <= 2) {
                    ans.Add(q);
                    break;
                }
            }
        }

        return ans;
    }
}