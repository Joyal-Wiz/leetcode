/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const Y = grid.length;
    const X = grid[0].length;

    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
            let c = grid[y][x];

            // skip if already visited (uppercase)
            if (c === c.toUpperCase()) continue;

            let queue = [[x, y]];

            while (queue.length > 0) {
                let [cx, cy] = queue.shift();

                if (grid[cy][cx] === grid[cy][cx].toUpperCase()) {
                    return true;
                }

                // mark visited
                grid[cy][cx] = grid[cy][cx].toUpperCase();

                for (let i = 0; i < 4; i++) {
                    let nx = cx + dx[i];
                    let ny = cy + dy[i];

                    if (
                        nx >= 0 && nx < X &&
                        ny >= 0 && ny < Y &&
                        grid[ny][nx] === c
                    ) {
                        queue.push([nx, ny]);
                    }
                }
            }
        }
    }

    return false;
};