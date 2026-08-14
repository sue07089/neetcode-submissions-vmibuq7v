class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = {};

        const dfs = (amount) => {
            if(amount === 0) return 0;
            if(memo[amount]) return memo[amount];

            let res = Infinity;
            for(let coin of coins){
                if(amount - coin >= 0){
                    res = Math.min(res, 1 + dfs(amount-coin));
                }
            }
            memo[amount] = res;
            return res;
        }

        const min = dfs(amount);
        return min === Infinity ? -1 : min;
    }
}
