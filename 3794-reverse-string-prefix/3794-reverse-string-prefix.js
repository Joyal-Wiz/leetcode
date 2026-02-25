/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
 let result = "";

    let end = k < s.length ? k : s.length;


    for (let i = end - 1; i >= 0; i--) {
        result += s[i];
    }

    for (let i = end; i < s.length; i++) {
        result += s[i];
    }

    return result;
};