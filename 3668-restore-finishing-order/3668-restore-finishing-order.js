/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let result = [];
    for (let id of order) {
        if (friends.includes(id)){
            
        result.push(id);
        } 
    }
    return result;
  
};