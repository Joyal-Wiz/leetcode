/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
     let even = 0;
    let odd = 1;
    let n=nums.length;
    
    while(even < n && odd < n){
        
        if(nums[even]%2==0){
            even+=2;
        }
        else if(nums[odd]%2==1){
            odd+=2;
        }else{
            let temp = nums[even];
            nums[even] = nums[odd];
            nums[odd] = temp;
            
            even+=2;
            odd+=2;
        }
    }
    return nums
};