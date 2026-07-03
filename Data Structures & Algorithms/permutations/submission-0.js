class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /**
     * 1. the naive approach -> we know that there are n! possibilities
     * if we can proactively create n! arrays with the number at index i at different pos
     * 
     */
    permute(nums) {
        if (nums.length === 0) {
            return [[]];
        }

        let perms = this.permute(nums.slice(1)); //get smallest permutation list
        let res = [];

        for (let p of perms) {
            for (let i = 0; i <= p.length; i++) {
                let p_copy = p.slice();
                p_copy.splice(i, 0, nums[0]); //insert nums[0] everywhere
                res.push(p_copy);
            }
        }
        return res;
    }
}
