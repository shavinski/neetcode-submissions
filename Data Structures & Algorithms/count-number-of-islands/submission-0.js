class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        const dfs = (r, c) => {
            // Base case: out of bounds or not land
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") {
                return;
            }

            // Mark the cell as visited
            grid[r][c] = "2";

            // Explore all 4 directions
            dfs(r + 1, c); // down
            dfs(r - 1, c); // up
            dfs(r, c + 1); // right
            dfs(r, c - 1); // left
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    islands++;
                    dfs(r, c); // Mark the current island
                }
            }
        }

        return islands;
    }

}
