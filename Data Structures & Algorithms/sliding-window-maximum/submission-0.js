class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /*
    * naive solution is outer loop checks every element as start and start + k
    * check max in that window -n2
    */
    maxSlidingWindow(nums, k) {
        if (!nums || k === 0) return [];
  
        const result = [];
        // Deque stores INDICES of elements in descending order of their values
        // Front of deque = index of maximum element in current window
        const deque = [];
        
        for (let i = 0; i < nums.length; i++) {
            // Remove indices that are out of the current window from the front
            if (deque.length > 0 && deque[0] === i - k) {
            deque.shift();
            }
            
            // Remove indices from the back whose corresponding values are 
            // smaller than current element (they can't be max anymore)
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
            }
        
            // Add current index to the back
            deque.push(i);
            
            // Once we've processed at least k elements, record the max
            // The front of deque is always the index of the maximum element
            if (i >= k - 1) {
            result.push(nums[deque[0]]);
            }
         }
  
  return result;

    }
}
