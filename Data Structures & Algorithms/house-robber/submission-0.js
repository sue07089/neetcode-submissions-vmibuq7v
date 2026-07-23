class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if(n === 1) return nums[0];
        if(n === 2) return Math.max(nums[0], nums[1]);

        const dp = new Array(n).fill(0);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for(let i =2; i < n ; i ++){
            dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
        }

        return Math.max(dp[n-1], dp[n-2]);
    }
}
