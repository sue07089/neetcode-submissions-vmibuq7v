class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
         if(n === 0) return 1;
         if (n < 0)
            return 1 / this.myPow(x, -n);
         const half = this.myPow(x, (n - (n % 2)) / 2);   // integer half, no Math.floor
    return n % 2 === 0 ? half * half : half * half * x;
         
    }
}
