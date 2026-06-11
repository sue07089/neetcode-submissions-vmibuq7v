class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let count = 0;
        let left = 0;
        //keep moving the right pointer until a duplicate is encountered
        //if there is a duplicate then , choose the max of count and local count, reset the set
        for(let right = 0; right< s.length ; right++){
                while (set.has(s[right])) {
                    set.delete(s[left]);
                    left++;
                }
                set.add(s[right]);
                count = Math.max(count, right-left+1);

                 
            }
             return count;
        }

}
