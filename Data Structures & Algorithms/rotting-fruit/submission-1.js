class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rMax = grid.length;
        const cMax = grid[0].length;

        function getNeighbors(x, y){
            const rDiff = [0, -1, 0, 1];
            const cDiff = [-1, 0, 1, 0];
            const neighbors = [];

            for(let i = 0; i < rDiff.length; i++ ){
                const r = x + rDiff[i];
                const c = y + cDiff[i];
                if(r >= 0 && c >= 0 && r < rMax && c < cMax){
                    neighbors.push([r, c]);
                }
            }

            return neighbors;
        }

        //add rotten fruit to queue and count fresh
        const queue = [];
        let fresh = 0;
        for(let i = 0 ; i < rMax; i++){
            for(let j = 0; j< cMax; j++){
                if(grid[i][j] === 2){
                    queue.push([i, j]);
                }
                if(grid[i][j] === 1){
                    fresh++;
                }

            }
        }

        if (fresh === 0) return 0; // nothing to rot, 0 minutes needed
        let minutes = 0;
            while(queue.length > 0 && fresh > 0){
                 const levelSize = queue.length;
                 for (let k = 0; k < levelSize; k++) {
                const cur  = queue.shift();
                for(const neighbor of getNeighbors(cur[0], cur[1])){
                   if(grid[neighbor[0]][neighbor[1]] === 1){
                        queue.push([neighbor[0],neighbor[1]]);
                            grid[neighbor[0]][neighbor[1]] = 2;
                            fresh--;
                    }
                }
            }
            minutes ++;
            }

         return fresh === 0 ? minutes : -1;
 
    }
}
