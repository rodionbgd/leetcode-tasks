/**
 * @param {string[][]} grid
 * @return {number}
 */

const numIslands = function (grid) {
    let islandCounter = 0;
    const V = "v";
    if (!grid.length) {
        return islandCounter;
    }
    const rowL = grid.length;
    const colL = grid[0].length;

    function exploreIsland(row, col) {
        grid[row][col] = V;
        if (grid[row]?.[col - 1] === "1") {
            exploreIsland(row, col - 1);
        }
        if (grid[row]?.[col + 1] === "1") {
            exploreIsland(row, col + 1);
        }
        if (grid?.[row - 1]?.[col] === "1") {
            exploreIsland(row - 1, col);
        }
        if (grid?.[row + 1]?.[col] === "1") {
            exploreIsland(row + 1, col);
        }
    }

    for (let row = 0; row < rowL; row++) {
        for (let col = 0; col < colL; col++) {
            if (grid[row][col] === V) {
                continue;
            }
            if (grid[row][col] === "1") {
                islandCounter++;
                exploreIsland(row, col);
            }
        }
    }
    return islandCounter;
};


const gridList = [
    [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ],
    [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]];


gridList.forEach(grid => console.log(numIslands(grid)));