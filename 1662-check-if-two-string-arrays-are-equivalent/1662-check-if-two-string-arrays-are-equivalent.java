class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        int i1 = 0;
        int i2 = 0;
        int k1 = 0;
        int k2 = 0;
        int n1 = word1.length;
        int n2 = word2.length;
        while(i1 < n1 && i2 < n2)
        {
            if(word1[i1].charAt(k1)!=word2[i2].charAt(k2))
                return false;
            k1++; k2++;
            if(k1 == word1[i1].length()){
                i1++;
                k1 = 0;
            }
            if(k2 == word2[i2].length())
            {
                i2++;
                k2=0;
            }
        }
        return i1==n1 && i2==n2;

    }
}