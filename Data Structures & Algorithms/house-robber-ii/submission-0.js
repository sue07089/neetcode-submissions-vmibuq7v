class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
         if(nums.length === 0) return 0;
         if(nums.length === 1) return nums[0];

        const dp = new Array(nums.length).fill(0);
        const n = nums.length;

        const getMax = (start, end) => {
            const dp = new Array(n).fill(0);

            dp[start] = nums[start];
            dp[start + 1] = Math.max(nums[start], nums[start + 1]);

            for (let i = start + 2; i <= end; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
            }

            return dp[end];
        };

        // Case 1: use houses 0 through n - 2, skip last
        const skipLast = getMax(0, n - 2);

        // Case 2: use houses 1 through n - 1, skip first
        const skipFirst = getMax(1, n - 1);

        return Math.max(skipLast, skipFirst);


    }
}
