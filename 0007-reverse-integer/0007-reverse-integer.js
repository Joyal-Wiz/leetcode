/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x);               
    let str = Math.abs(x).toString();      
    let reversedStr = str.split('').reverse().join('');
    let reversedNum = sign * Number(reversedStr);

    if (reversedNum < -2147483648 || reversedNum > 2147483647) {
        return 0;
    }

    return reversedNum;

};