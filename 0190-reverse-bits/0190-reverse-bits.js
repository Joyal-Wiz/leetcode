/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let revBit = [];
for(let i = 0;i<32;i++){
    let rem = n % 2;
    n = Math.floor(n / 2);
    revBit.push(rem);
}
let multi = 0;
    for(let num of revBit){
        multi = multi*2+num;
    }
    return multi;

};