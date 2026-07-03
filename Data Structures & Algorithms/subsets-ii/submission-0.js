class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 1. sort, then store subsets in set
     */
    subsetsWithDup(nums) {
        const res = new Set();
        nums.sort((a, b) => a - b);

        function backtrack(start, subset){
            if (start === nums.length) {
            res.add(JSON.stringify(subset));
            return;
            }

            subset.push(nums[start]);
            backtrack(start+1, subset);
            subset.pop();
            backtrack(start+1, subset);

        }

        backtrack(0, []);
        return [...res].map(JSON.parse);



    }
}
