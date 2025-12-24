/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   let regex = new RegExp(`[${jewels}]`, "g");
let count = stones.match(regex)?.length || 0;

return count;
};