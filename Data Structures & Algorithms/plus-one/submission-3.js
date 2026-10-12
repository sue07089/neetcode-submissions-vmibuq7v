class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     * 1. convert list to string -> string to number -> add 1 and convert to str -> list
     * 2. Starting from end, add 1 and if there is a carry remaining return new array with first element as carry
     */
    plusOne(digits) {
        const n = digits.length;
        for (let i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        const result = new Array(n + 1).fill(0);
        result[0] = 1;
        return result;
    }
}
