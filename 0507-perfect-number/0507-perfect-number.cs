public class Solution {
    public bool CheckPerfectNumber(int num) {
        HashSet<int> set = new HashSet<int>(){6, 28, 496, 8128, 33550336};
        return set.Contains(num);
    }
}