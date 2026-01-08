/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
       let arr = word.split("");
   let index=word.indexOf(ch)
   let left = 0;
   let right =index;
   

while(right>left){
    let temp=arr[right];
    arr[right]=arr[left];
    arr[left]=temp;
    left++;
    right--;
}
    return arr.join("");
};