class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === target) return mid;
           if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;  // target is in left half
                } else {
                    left = mid + 1;   // target is in right half
                }
            }
            // Right half is sorted
            else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;   // target is in right half
                } else {
                    right = mid - 1;  // target is in left half
                }
            }
        }
        return -1;
    }
}
