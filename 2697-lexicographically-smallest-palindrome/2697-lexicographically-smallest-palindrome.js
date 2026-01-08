/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
        let arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            let smaller = arr[left] < arr[right] ? arr[left] : arr[right];
            arr[left] = smaller;
            arr[right] = smaller;
        }
        left++;
        right--;
    }

    return arr.join("");
};