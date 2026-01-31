/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   for(let c of letters) {
        if(c.charCodeAt(0) > target.charCodeAt(0)) return c;
    }

    return letters[0];
};