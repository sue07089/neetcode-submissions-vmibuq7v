class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let left = 0;
    let maxLen = 0;
    let maxFreq = 0;
    const count = {};
    
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        count[rightChar] = (count[rightChar] || 0) + 1;
        maxFreq = Math.max(maxFreq, count[rightChar]);
                
        // WHILE, not IF — might need to shrink multiple times
        while (right - left + 1 - maxFreq > k) {
            count[s[left]]--;
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
        
    }
    
  return maxLen;
}
}
