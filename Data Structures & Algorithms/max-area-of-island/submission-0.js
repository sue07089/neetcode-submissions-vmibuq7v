class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        //bfs, keep note of max
        let max = 0;
        let rMax = grid.length;
        let cMax = grid[0].length;

        function getNeighbors (x, y){
            const rDiff = [0, -1, 0, 1];
            const cDiff = [-1, 0, 1, 0];
            const neighbors = [];

            for(let i = 0; i < rDiff.length; i++){
                const row = x + rDiff[i];
                const col = y + cDiff[i];
                if(row >= 0 && row < rMax && col>=0 && col < cMax )
                    neighbors.push([row, col]);
            }
            return neighbors;
        }
        
        function bfs(start){
            let [r,c] = start;
            let queue = [[r,c]];
            grid[r][c] = 0;
            let res = 1;

            while(queue.length > 0){
                const node = queue.shift();
                for (const [x, y] of getNeighbors(node[0], node[1])){
                    if(grid[x][y] === 1){
                        grid[x][y] = 0;
                        queue.push([x, y]);
                        res ++;
                    }
                }
            }
            return res;

        }


        for(let i =0; i< rMax; i++){
            for(let j = 0; j < cMax; j++){
                if(grid[i][j] === 1){
                    max = Math.max(max, bfs([i,j]));
                }
            }

        }
        

        return max;

    }
}
