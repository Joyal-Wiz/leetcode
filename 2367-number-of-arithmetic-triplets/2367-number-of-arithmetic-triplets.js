/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    
let n = nums.length;
let count = 0;
    
let i = 0;
let j = 1;
let k = 2;

while (i < n && j < n && k < n){
    
    let a = nums[j] - nums[i];
    let b = nums[k] - nums[j];
    
    if(a==diff && b == diff){
        count++;
        i++;
        j++;
        k++;
    }else if(b < diff){
        k++;
    }else if(a < diff){
        j++;
    }else{
        i++;
         if (i === j) j++;
            if (j === k) k++;
    }
}
return count;
};