class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let sorted = nums.sort();
        let map = new Map();
        for(let i = 0; i< sorted.length; i++){
            let freq = map.get(nums[i]) ?? 0;
            map.set(nums[i], freq + 1);
        }
       
        // Sort by frequency (descending): b[1] - a[1]
        // b[1] is second element (frequency)
        const sortedM = [...map.entries()].sort((a, b) => b[1] - a[1]);

        // Return first k numbers
        return sortedM.slice(0, k).map(entry => entry[0]);
       
    }
}
