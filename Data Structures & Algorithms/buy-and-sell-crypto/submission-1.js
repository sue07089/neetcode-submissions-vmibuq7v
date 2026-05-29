class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //max profit will be smallest number followed by largest number
        //first pass - find the index of min
        //second pass - find the index of max after min

        // can we do it in one pass?
        let left = 0;
        let maxDiff = 0;
        for(let i =1 ; i < prices.length; i++){
         // drop left when you encounter a number smaller - 
         if(prices[left] > prices[i]) left = i;
         maxDiff = Math.max(maxDiff, prices[i] - prices[left]);

        }
        return maxDiff;
    }
}
