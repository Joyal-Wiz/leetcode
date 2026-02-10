/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
let i=0;
let j=0;

for(let c of s ){
    if(c==='R'){
        i++
    }else{
        i--;
    }
    if(i===0){
        j++;
    }
}
return j;
};