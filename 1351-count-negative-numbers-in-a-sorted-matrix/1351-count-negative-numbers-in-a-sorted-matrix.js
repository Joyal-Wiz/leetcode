/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.reduce((sum, row) => {
        return sum + row.filter(num => num < 0).length;
    }, 0);};