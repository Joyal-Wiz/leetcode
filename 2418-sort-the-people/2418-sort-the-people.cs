public class Solution {
    public string[] SortPeople(string[] names, int[] heights) 
    {
        Array.Sort(heights, names); 
        var name = names.ToList<string>();
        name.Reverse();
        return name.ToArray();
    }
}