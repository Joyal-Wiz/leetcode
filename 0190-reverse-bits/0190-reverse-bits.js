/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let rev = 0;
    for(let i = 0; i < 32; i++) {
        rev = (rev << 1) | ((n >> i) & 1);
    }
    return rev;

};