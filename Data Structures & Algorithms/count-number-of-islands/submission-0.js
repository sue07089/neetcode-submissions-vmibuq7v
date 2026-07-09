class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rowMax = grid.length;
        const colMax = grid[0].length;

        function get_neighbors(x, y){
            const rDiff = [0, -1, 0, 1];
            const cDiff = [-1, 0, 1, 0];
            const neighbors = [];

            for(let i=0; i < rDiff.length; i++){
                let row = x + rDiff[i];
                let col = y + cDiff[i];
                if( row < rowMax && row >= 0 && col >=0 && col <colMax )
                    neighbors.push([row, col]);
            }
            return neighbors;
        }

        function bfs(start){
            const queue = [start];
            const [r,c] = start;

            grid[r][c] = 0;
            
            while(queue.length > 0){
                const [x, y] = queue.shift();
                for(let neighbor of get_neighbors(x,y)){
                    const [nr, nc] = neighbor;
                    if(grid[nr][nc] === "0") continue;
                    queue.push(neighbor);
                    grid[nr][nc] = "0"; 
                }
            }
        }

        let count = 0;
        for (let i = 0; i < rowMax; i++){
            for(let j = 0; j < colMax; j++){
                if(grid[i][j] === "0") continue;
                bfs([i,j]);
                count++;
            }
        }

        return count;
        
    }
}
