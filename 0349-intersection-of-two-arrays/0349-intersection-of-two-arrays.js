/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let sort1=nums1.sort((a,b)=>a-b);
let sort2=nums2.sort((a,b)=>a-b);


let i=0;
let j=0;
let res=[];

while(i < sort1.length && j<sort2.length){
    if(sort1[i] < sort2[j]){
        i++;
    }else if(sort1[i]>sort2[j]){
        j++;
    }
    else{
        res.push(sort1[i]);
        let val = sort1[i];

            while (i < sort1.length && sort1[i] === val) i++;
            while (j < sort2.length && sort2[j] === val) j++;
    }
}
return res;
};