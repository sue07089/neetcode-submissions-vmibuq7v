class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = matrix.length, cols = matrix[0].length;

        // 1. Remember whether the marker row/col themselves had zeros
        let firstRowHasZero = false, firstColHasZero = false;
        for (let j = 0; j < cols; j++) if (matrix[0][j] === 0) firstRowHasZero = true;
        for (let i = 0; i < rows; i++) if (matrix[i][0] === 0) firstColHasZero = true;

        // 2. Mark: write a 0 into the first cell of the row and the column
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;   // mark row i
                    matrix[0][j] = 0;   // mark col j
                }
            }
        }

        // 3. Zero the inner cells using the markers
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
            }
        }

        // 4. Finally, zero the marker row/col if they needed it
        if (firstRowHasZero) for (let j = 0; j < cols; j++) matrix[0][j] = 0;
        if (firstColHasZero) for (let i = 0; i < rows; i++) matrix[i][0] = 0;
    }

}
