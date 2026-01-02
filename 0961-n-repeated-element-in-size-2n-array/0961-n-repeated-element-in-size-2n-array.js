/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let set = new Set();
    for(let a of nums){
        if(set.has(a)){
            return a;
        }
        set.add(a);
    }
};