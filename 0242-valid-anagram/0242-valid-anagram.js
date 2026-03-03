/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
if(s.length!==t.length){
    return false;
}

let freq={};

for(let i=0;i<s.length;i++){
    let ch=s[i];
    
    if(freq[ch]===undefined){
        freq[ch]=1;
    }else{
        freq[ch]++;
    }
}
    for(let i=0;i<t.length;i++){
        
        let ch=t[i];
        
        if(freq[ch]===undefined || freq[ch]===0){
            return false;
        }
        freq[ch]--
    }
        return true
};