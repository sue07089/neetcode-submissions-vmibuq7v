class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
        }

        if(sum % 2 ) return false;
        const target = sum /2 ;

        let dp = Array(target + 1).fill(false);
        let nextDp = Array(target + 1).fill(false);

        dp[0] = true;
        for (let i = 0; i < nums.length; i++) {
             for (let j = 1; j <= target; j++) {
                if (j >= nums[i]) {
                    nextDp[j] = dp[j] || dp[j - nums[i]];
                }
                else{
                    nextDp[j] = dp[j];
                }
             }
             [dp, nextDp] = [nextDp, dp];
        }

        return dp[target];

    }
}
