function countNegatives(grid: number[][]): number {
        return grid.reduce((sum, row) => {
        return sum + row.filter(num => num < 0).length;
    }, 0);
};