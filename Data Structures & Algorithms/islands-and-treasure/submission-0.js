class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const rMax = grid.length;
        const cMax = grid[0].length;
        const INF = 2147483647;

        function getNeighbors (x, y){

            const rDiff = [0, -1, 0, 1];
            const cDiff = [-1, 0, 1, 0];
            const neighbors = [];

            for(let i = 0; i < rDiff.length; i++){
                const row = x + rDiff[i];
                const col = y + cDiff[i];
                if(row >=0 && col>=0 && row < rMax && col < cMax){
                    neighbors.push([row, col]);
                }
            }
            return neighbors;
        }

        const queue = [];
        for(let i =0; i < rMax; i++){
            for(let j =0; j <cMax; j++){
                if(grid[i][j] === 0){
                    queue.push([i, j]);
                }
            }
        }

        while(queue.length > 0){
            const [r, c] = queue.shift();
            for(const neighbor of getNeighbors(r, c)){
                const row = neighbor[0];
                const col = neighbor[1];
                if(grid[row][col] === INF){
                    queue.push([row, col]);
                    grid[row][col] = grid[r][c] + 1;
                }
            }
        }

        return grid;
    }
}
