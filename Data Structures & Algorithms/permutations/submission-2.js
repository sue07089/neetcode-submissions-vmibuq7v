class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /**
     * 1. the naive approach -> we know that there are n! possibilities
     * if we can recursively build the permutation with smallest list 
     * and the add the first number back to the list
     * 2. 
     */
    permute(nums) {
        let res = [];

        function backtrack(perm, pick) {
            if (perm.length === nums.length) { //built a permutation
                res.push([...perm]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) { //nums at i not picked
                    perm.push(nums[i]);
                    pick[i] = true;
                    backtrack(perm, pick);
                    perm.pop(); //
                    pick[i] = false;
                }
            }
        }

        backtrack([], new Array(nums.length).fill(false));
        return res;
    }
}
