/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
        let balance = 0;
    let swaps = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            balance++;
        } else { 
            if (balance > 0) {
                balance--;
            } else {
                swaps++;
                balance = 1;
            }
        }
    }
    return swaps;
};