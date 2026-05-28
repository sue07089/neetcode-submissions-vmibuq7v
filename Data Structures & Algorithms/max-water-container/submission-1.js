class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right){
            let newMax = (Math.min(heights[left], heights[right]) * (right - left));
            
            max = Math.max(max, newMax);
            if(heights[left] < heights[right]) left++;
            else right --;
        }
        return max;
    }
}
