class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        //approach 1 - starting from i, calculate all the increasing subsequence and find the longest one.
        // for every number, we either pick it or not based on if it is greater than the last number = O(2^n)

        //approach 2
        // maintain a dp array such that it will store the 
        // length of longest subsequence so far - bottom up dp approach
        // at the end return the max - O(n2)
        const dp = new Array(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++){
            let j = 0;
            while(j < i){
                if(nums[j] < nums[i]){
                    dp[i] = Math.max(dp[i] , dp[j] + 1);
                }
                j++;
            }
        }

        return Math.max(...dp);
    }
}
