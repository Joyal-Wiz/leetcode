/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let ans = [];

    for (let q of queries) {
        for (let d of dictionary) {
            let diff = 0;

            for (let i = 0; i < q.length; i++) {
                if (q[i] !== d[i]) {
                    diff++;
                }

                if (diff > 2) break;
            }

            if (diff <= 2) {
                ans.push(q);
                break;
            }
        }
    }

    return ans;
};