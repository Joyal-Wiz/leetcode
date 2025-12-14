/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
arr1=[]
for(let i in nums){
    if(nums[i]%2==0){
      arr1.push(0)  
    }else{
        arr1.push(1)
    }

}
    return arr1.sort()
};