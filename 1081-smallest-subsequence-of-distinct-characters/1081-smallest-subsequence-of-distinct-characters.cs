public class Solution {
    public string SmallestSubsequence(string strIn_) {

        int[] lastPosPerChr = new int[26];
        for (int idx = 0; idx < strIn_.Length; idx++) {
            lastPosPerChr[strIn_[idx] - 'a'] = idx;
        }

        bool[] isPresentChr = new bool[26];
        var strOut_ = new System.Text.StringBuilder();

        for (int idx = 0; idx < strIn_.Length; idx++) {
            char chr = strIn_[idx];
            int num = chr - 'a';

            if (isPresentChr[num]) {
                continue;
            }

            while (strOut_.Length > 0 && 
                   strOut_[strOut_.Length - 1] > chr &&
                   lastPosPerChr[strOut_[strOut_.Length - 1] - 'a'] > idx
            ) {
                isPresentChr[strOut_[strOut_.Length - 1] - 'a'] = false;
                strOut_.Length--; 
            }

            strOut_.Append(chr);
            isPresentChr[num] = true;
        }

        return strOut_.ToString();
    }
}