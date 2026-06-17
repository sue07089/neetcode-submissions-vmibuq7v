class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    /**
     * we can combine them and then sort them and return middle -n log n due to sorting
     * another way is that we pick n+m/2 elements from right and left to find the half 
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length> nums2.length){
            [nums1, nums2] = [nums2, nums1];
        }
        let s1 = nums1.length;
        let s2 = nums2.length;

       
        let left = 0;
        let right = s1;
        let half = Math.floor((s1 + s2+ 1)/2);
        
        while(left <= right){
            const i = Math.floor((left+right)/2); //from num1
            const j = half - i; //from num2

            const nums1LeftMax = i === 0 ? -Infinity : nums1[i-1];
            const nums1RightMin = i === s1 ? Infinity: nums1[i];
            const nums2LeftMax = j === 0 ? -Infinity: nums2[j-1];
            const nums2RightMin = j === s2 ? Infinity: nums2[j];

            if(nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin){
                if ((s1 + s2) % 2 === 1) {
                return Math.max(nums1LeftMax, nums2LeftMax);
            }
            return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
            }
            else if(nums1LeftMax > nums2RightMin){
                //explore left of nums 1
                right = i - 1;
            }
            else{
                left = i+1;
            }


        }
        return 
        
    }
}
