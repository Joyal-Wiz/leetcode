/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let sort =nums.sort((a, b) => a - b);

let left = 0;
let right = nums.length-1;
let count = 0;
while(right>left){
    let sum=sort[left]+sort[right];
    if(sum<target){
        count+=(right-left);
        left++
    }else{
        right--;
    }
}
return count;
};