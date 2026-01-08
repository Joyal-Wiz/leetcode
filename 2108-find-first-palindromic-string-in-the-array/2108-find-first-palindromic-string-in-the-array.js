/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
 function check(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    for (let word of words) {
        if (check(word)) {
            return word;
        }
    }

    return "";

};