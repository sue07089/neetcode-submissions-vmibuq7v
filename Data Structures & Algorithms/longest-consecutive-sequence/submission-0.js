class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // use set so that look up becomes easy
        const numSet = new Set(nums);
        let maxLen = 0;
    
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {  // Only count from START
            let len = 1;
            while (numSet.has(num + len)) len++;
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
    }
}
