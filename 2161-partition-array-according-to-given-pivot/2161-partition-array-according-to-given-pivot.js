/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
        let Larr=[];
    let Marr=[];
    let Rarr=[];
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>pivot){
            Larr.push(nums[i]);
        }else if(nums[i]==pivot){
            Marr.push(nums[i]);
        }else{
            Rarr.push(nums[i])
        }
    }
    return [...Rarr,...Marr,...Larr]
};