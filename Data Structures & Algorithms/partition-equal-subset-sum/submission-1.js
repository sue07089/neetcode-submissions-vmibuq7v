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

        // const dp = Array(target + 1).fill(false);

        // dp[0] = true;
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = target; j >= nums[i]; j--) {
        //         dp[j] = dp[j] || dp[j - nums[i]];
        //     }
        // }

        // return dp[target];
        let dp = new Set();
        dp.add(0);

        for (let i = nums.length - 1; i >= 0; i--) {
            const nextDP = new Set();
            for (const t of dp) {
                if (t + nums[i] === target) {
                    return true;
                }
                nextDP.add(t + nums[i]);
                nextDP.add(t);
            }
            dp = nextDP;
        }
        return false;

    }
}
