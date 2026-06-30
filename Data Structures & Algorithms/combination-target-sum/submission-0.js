class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    /**
     * 1. we can create a decision tree where we keep including the number as long as cur sum is less than target
     * then we add the subset to result if cur sum is equal to the target - sort the array
     *                              []
     *                        [2]      [5]     [6]  [9]
     *       [2, 2]. [2,5] [2,6] [2,9]         
     */    
    combinationSum(nums, target) {
    nums.sort((a, b) => a - b);

    const res = [];
    const sub = [];

    function dfs(sum, i) {
        if (sum === target) {
            res.push([...sub]);
            return;
        }
        if (i >= nums.length || sum > target) return;

        // include nums[i], stay at i (allow reuse)
        sub.push(nums[i]);
        dfs(sum + nums[i], i);
        sub.pop();

        // exclude nums[i], move on
        dfs(sum, i + 1);
    }

    dfs(0, 0);
    return res;
}
}
