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

        //approach 3, dp with smallest number seen so far and binary search
        // const dp = new Array(nums.length).fill(1);

        // for(let i = 1; i < nums.length; i++){
        //     let j = 0;
        //     while(j < i){
        //         if(nums[j] < nums[i]){
        //             dp[i] = Math.max(dp[i] , dp[j] + 1);
        //         }
        //         j++;
        //     }
        // }

        // return Math.max(...dp);

        const dp = [];
        dp.push(nums[0]);

        let LIS = 1;
        for(let i =1 ; i < nums.length; i ++){
            if(dp[dp.length - 1] < nums[i]){
                LIS++;
                dp.push(nums[i]);
                continue;
            }

            let left = 0, right = dp.length -1;
            while(left < right) {
                const mid = Math.floor((left + right) / 2);
                if(dp[mid] < nums[i]){
                    left = mid + 1;
                }else {
                    right = mid;
                }
            }
            dp[left] = nums[i];
        }
        return LIS;
    }
}
