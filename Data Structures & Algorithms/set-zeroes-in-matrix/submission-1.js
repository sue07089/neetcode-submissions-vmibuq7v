class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
setZeroes(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const zeroRows = new Set(), zeroCols = new Set();

    // Pass 1: only record, never modify
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Pass 2: zero any cell whose row or col was marked
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}

}
