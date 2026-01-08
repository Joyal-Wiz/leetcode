/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
        let pos=[];
    let neg=[];
    
    for(let x of nums){
        if(x>0) pos.push(x);
            else neg.push(x);
    }
        let res=[];
        for(let k=0;k < pos.length;k++){
            res.push(pos[k]);
            res.push(neg[k])
        }
    
        return res;
};