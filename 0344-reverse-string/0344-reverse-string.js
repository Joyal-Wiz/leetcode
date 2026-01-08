/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse();
    let left = 0;
    let right = s.length - 1;
    
    while(right > left){
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        
        left++;
        right--;
    }
    return s;
};