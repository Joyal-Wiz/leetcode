/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed);

    return words.filter(word =>[...word].every(ch => allowedSet.has(ch))).length;
};