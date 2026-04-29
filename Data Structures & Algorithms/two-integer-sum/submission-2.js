class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map(); // number -> index
        
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }
        
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            
            if (map.has(complement)) {
                let index1 = map.get(complement);
                let index2 = i;
                
                // Make sure we don't use the same element twice
                if (index1 !== index2) {
                    return index1 < index2 ? [index1, index2] : [index2, index1];
                }
            }
        }
    }
}