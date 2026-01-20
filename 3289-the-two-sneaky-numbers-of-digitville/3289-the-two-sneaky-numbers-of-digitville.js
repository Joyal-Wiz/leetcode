/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map ={}
let res=[]
for(let i of nums ){
    if(map[i])res.push(i)
        else map[i]=2;
    }
    
    return res
};