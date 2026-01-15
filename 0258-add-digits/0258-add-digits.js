/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
};
console.log(addDigits(38));
console.log(addDigits(0)); 