/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
        let x=0;
    for(const i of operations){
        if(i[1]==='+'){
            x++;}
        else{
        x--;

        } 
    }
    return x;
};