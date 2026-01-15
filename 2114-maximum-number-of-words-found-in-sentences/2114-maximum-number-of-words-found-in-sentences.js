/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let b = 0;
    for (let i of sentences) {
        let a = i.split(" ").length;
        if (a > b){
         b = a;
        }
    }
    return b;
    

};