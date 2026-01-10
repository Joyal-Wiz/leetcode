/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(i=>i*i).sort((a,b)=>a-b);


};