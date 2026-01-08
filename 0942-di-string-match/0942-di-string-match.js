/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
   
    let low=0;
    let high=s.length;

    let res=[];

    for(let i=0; i<s.length; i++){

        if(s[i]=='I'){
            res.push(low);
            low++;
        }
        else{
            res.push(high);
            high--;
        }
    }
    res.push(low);

    return res; 
};