class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

       
        if(n == 1) return 1; //only 1 way - start from 0, take 1 step. cant take 2 steps since not enough elements
        if(n == 2) return 2;

        const dp = new Array(n).fill(0); //at least 2 steps are there
        dp[0] = 1; // ways to reach step 1
        dp[1] = 2; // ways to reach step 2

        for(let i = 2; i < n; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }

        return dp[n-1];
    }
}
