class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    /**
     * 1. traverse row wise to find the first char, if found, we can go in 4 directions
     * if the word is found in one of the four directions return true, else anandon that path
     * and backtrack to last step to explore more
     * O(n*n)
     */
    exist(board, word) {
        const rowD = [0, -1, 0, 1];
        const colD = [-1, 0, 1, 0];
        const maxRow = board.length;
        const maxCol = board[0].length;

        for(let i = 0; i < maxRow; i++){
            for(let j = 0; j < maxCol; j++){
                    if(dfs(i, j, 0)) return true;
            }
        }

        function dfs(i, j, wordIndex){

            if(wordIndex === word.length) return true;
            if (i < 0 || i >= maxRow || j < 0 || j >= maxCol) return false;
            if (board[i][j] !== word[wordIndex]) return false;
            
            const temp = board[i][j];
            board[i][j] = '#'; // mark visited

            for (let k = 0; k < rowD.length; k++) {
                const r = i + rowD[k];
                const c = j + colD[k];
                if (dfs(r, c, wordIndex + 1)) {
                    board[i][j] = temp; // restore before returning
                    return true;
                }
            }

            board[i][j] = temp; // unmark (backtrack)
            return false;
       

        }

        return false;
    }
}
