class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        function getNeighbors(x, y){
            // check all 4 directions: down, up, right, left
            const candidates = [
                [x + 1, y],
                [x - 1, y],
                [x, y + 1],
                [x, y - 1],
            ];
            // only keep the ones that are actually inside the board
            return candidates.filter(
                ([nx, ny]) => nx >= 0 && nx < rows && ny >= 0 && ny < cols
            );
        } 

        function bfs(startX, startY) {
            const queue = [[startX, startY]]; // cells waiting to be explored
            board[startX][startY] = 'S';      // mark this cell safe right away

            while (queue.length > 0) {
                const [x, y] = queue.shift(); // pull the next cell to explore

                for (const [nx, ny] of getNeighbors(x, y)) {
                    if (board[nx][ny] === 'O') {
                        board[nx][ny] = 'S';  // mark safe so we don't revisit it
                        queue.push([nx, ny]); // queue it up to explore its neighbors too
                    }
                }
            }
    }
     // Step 1: start a BFS from every 'O' sitting on the border.
    // Anything these BFS calls reach can never be captured.
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            const onEdge = x === 0 || x === rows - 1 || y === 0 || y === cols - 1;
            if (onEdge && board[x][y] === 'O') {
                bfs(x, y);
            }
        }
    }

    // Step 2: anything still 'O' was never reached from the border, so capture it.
    // Anything marked 'S' survives — flip it back to 'O'.
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (board[x][y] === 'O') board[x][y] = 'X';
            else if (board[x][y] === 'S') board[x][y] = 'O';
        }
    }
    }
}
