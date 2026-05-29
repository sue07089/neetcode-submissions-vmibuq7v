class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // for all rows, no number should be repeating
        //for all columns, no number should be repeating
        let rowL = 9;
        for(let i = 0; i < rowL; i++){
            let rowSet = new Set();
            for(let j = 0; j < rowL; j++){
                if(rowSet.has(board[i][j])) return false;
                if((board[i][j] !== ".")) rowSet.add(board[i][j]);
            }
        }
        let colL = 9;
        for(let j = 0; j < colL; j++){
            let colSet = new Set();
            for(let i = 0; i < colL; i++){
                if(colSet.has(board[i][j])) return false;
                if((board[i][j] !== ".")) colSet.add(board[i][j]);
            }
        }
        //in 3*3, no number should be repeating
        for(let k = 0; k < 9; k=k+3){
            for(let m = 0; m < 9; m = m+3){
            let subsetS = new Set();
            for(let i = k; i < 3 + k; i++){
                for(let j = m; j< 3 + m; j++){
                    if(subsetS.has(board[i][j])) return false;
                    if((board[i][j] !== ".")) subsetS.add(board[i][j]);
                }
            }
            }
        }
        return true;
    }
}
