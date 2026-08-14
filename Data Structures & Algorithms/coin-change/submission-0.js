class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        const dp = new Array(amount + 1).fill(amount+1);
        // 1 2 3 4 5 6 7 8 9 10 11 12
        //1 ..........6,6             12, 12 coins 
        //2 1,5 
        //3

        //for every coin in coins, check if amount can be reached
        dp[0] = 0;
        for(let i=1; i<= amount; i++){
            for(let j=0; j < coins.length; j++){
                if(coins[j] <= i){
                    dp[i] = Math.min(dp[i], 1+dp[i-coins[j]]);
                }
            }

        }


       return dp[amount] > amount ? -1 : dp[amount];
    }
}
