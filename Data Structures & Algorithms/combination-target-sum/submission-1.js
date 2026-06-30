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

        //sort the array
        nums.sort((a,b) => a-b);

        const res = [];
        const sub  = [];

        function dfs (sum, start){
            if(sum === target) {
                res.push([...sub]); //base case
                return;
            }

            if(sum > target) return;

            for(let i = start; i < nums.length; i++){
                sub.push(nums[i]);
                dfs(nums[i] + sum, i);
                sub.pop();
            }
        }

        dfs(0, 0);

        return res;

    }
}
