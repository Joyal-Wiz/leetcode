/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let dis = 0;
    let n = colors.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (colors[i] !== colors[j]) {
                dis = Math.max(dis, j - i);
            }
        }
    }

    return dis;
};