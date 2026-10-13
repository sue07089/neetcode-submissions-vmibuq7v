class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
   myPow(x, n) {
    if (n < 0) { x = 1 / x; n = -n; }

    let result = 1;
    while (n > 0) {
        if (n % 2) { result *= x; n--; }   // odd: peel off one x
        x *= x;                            // square the base
        n /= 2;                            // n is even here, so this is exact
    }
    return result;
}  
}
