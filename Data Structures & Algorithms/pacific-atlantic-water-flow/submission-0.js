class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        if (!heights || heights.length === 0) return [];
        const rows = heights.length;
        const cols = heights[0].length;
        const res = [];

        function getNeighbors (node){
            const [x, y] = node;
            const rDiff = [0, -1, 0, 1];
            const cDiff = [-1, 0, 1, 0];
            const neighbors = [];

            for(let i =0; i < rDiff.length; i++){
                const row = x + rDiff[i];
                const col = y + cDiff[i];
                if(row >=0 && col>=0 && row < rows && col < cols){
                    neighbors.push([row, col]);
                }
            }

            return neighbors;
        }

        const pacific = new Set();
        const atlantic = new Set();

         function bfs(starts, visited) {
            let queue = [...starts];

            while(queue.length > 0){
                const [x, y] = queue.shift();
                const neighbors = getNeighbors([x, y]);
                for(let i = 0; i < neighbors.length; i++ ){
                    const [nRow, nCol] = neighbors[i];
                    const key = `${nRow},${nCol}`;
                    if(heights[x][y] <= heights[nRow][nCol] && !visited.has(key)){
                        visited.add(key);
                        queue.push([nRow, nCol]);
                    }
                }
            }
            return visited;
        }

        const pacificStarts = [];
        const atlanticStarts = [];

        // seed pacific with top row + left column
        for (let j = 0; j < cols; j++) { pacificStarts.push([0, j]); pacific.add(`0,${j}`); }
        for (let i = 1; i < rows; i++) { pacificStarts.push([i, 0]); pacific.add(`${i},0`); }  // fix #3: i++ not j++

        // seed atlantic with bottom row + right column
        for (let j = 0; j < cols; j++) { atlanticStarts.push([rows - 1, j]); atlantic.add(`${rows - 1},${j}`); }
        for (let i = 0; i < rows - 1; i++) { atlanticStarts.push([i, cols - 1]); atlantic.add(`${i},${cols - 1}`); }

        const visitedAtlantic = bfs(atlanticStarts, atlantic);
        const visitedPacific = bfs(pacificStarts, pacific);

        //take intersection of pacific and atlantic
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = `${r},${c}`;
                if (visitedPacific.has(key) && visitedAtlantic.has(key)) {
                    res.push([r, c]);
                }
            }
        }

        return res;

    }
}
