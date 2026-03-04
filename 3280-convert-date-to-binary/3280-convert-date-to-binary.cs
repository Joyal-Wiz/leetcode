public class Solution {
    public string ConvertDateToBinary(string date) {
        var parts = date.Split('-');
        var result = new List<string>();
        foreach (var part in parts) {
            int num = int.Parse(part);
            result.Add(Convert.ToString(num, 2));
        }
        return string.Join("-", result);
    }
}