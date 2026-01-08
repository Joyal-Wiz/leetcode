/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
        let arr=s.split("");
let start=0;

for(let i=0;i<=arr.length;i++){
 if(i==arr.length || arr[i]==" ") {
     let left=start;
     let right =i-1;
     
     while(right>left){
         let temp=arr[left];
         arr[left]=arr[right];
         arr[right]=temp;
         left++;
         right--;
 }
 start=i+1
}
}
return arr.join("");
};