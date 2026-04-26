function containsCycle(grid: string[][]): boolean {
    const Y = grid.length;
    const X = grid[0].length;

    const dx: number[] = [0, 1, 0, -1];
    const dy: number[] = [-1, 0, 1, 0];

    for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
            let c = grid[y][x];

            if (c === c.toUpperCase()) continue;

            let queue: [number, number][] = [[x, y]];

            while (queue.length > 0) {
                let [cx, cy] = queue.shift()!;

                if (grid[cy][cx] === grid[cy][cx].toUpperCase()) {
                    return true;
                }

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
}