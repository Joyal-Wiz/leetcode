public class Solution {
    public string[] FindRestaurant(string[] list1, string[] list2) {
                List<string> commonStr = new List<string>();
            int  minSum = 10000;
            for (int i = 0; i < list1.Length; i++)
            {
                for (int j = 0; j < list2.Length; j++)
                {
                    if ( list1[i] == list2[j] && i+j <= minSum)
                    {
                        if (i + j < minSum)
                        {
                            commonStr.Clear();
                            minSum = i + j;
                            commonStr.Add(list1[i]);
                        }
                        else
                        {
                            minSum = i + j;
                            commonStr.Add(list1[i]);
                        }
                    }
                }
            }
            return commonStr.ToArray();
    }
}