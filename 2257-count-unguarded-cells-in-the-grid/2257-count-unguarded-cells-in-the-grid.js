/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const g = Array(m).fill().map(() => Array(n).fill(0));
    
    for (const [x, y] of guards) {
        g[x][y] = 2;
    }
    for (const [x, y] of walls) {
        g[x][y] = 2;
    }
    
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    for (const [gx, gy] of guards) {
        for (const [dx, dy] of dirs) {
            let x = gx;
            let y = gy;
            while (true) {
                x += dx;
                y += dy;

                if (x < 0 || x >= m || y < 0 || y >= n || g[x][y] === 2) {
                    break;
                }
                g[x][y] = 1;
            }
        }
    }
        return g.reduce((sum, row) => sum + row.filter(cell => cell === 0).length, 0);
};