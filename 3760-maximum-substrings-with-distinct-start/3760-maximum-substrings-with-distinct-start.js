/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
let map ={};
let count =0;
for (let i=0;i<s.length;i++){
    if(!map[s[i]]){
        map[s[i]]=true;
        count++;
    }}
    return count;

};