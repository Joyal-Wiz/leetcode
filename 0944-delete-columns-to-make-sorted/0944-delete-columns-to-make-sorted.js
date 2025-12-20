/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let del = 0;
    const rows = strs.length;
    const cols = strs[0].length;

    for (let c = 0; c < cols; c++) {
        let prev = strs[0].charCodeAt(c);

        for (let r = 1; r < rows; r++) {
            let curr = strs[r].charCodeAt(c);
            if (curr < prev) {
                del++;
                break;
            }
            prev = curr;
        }
    }
    return del;
};