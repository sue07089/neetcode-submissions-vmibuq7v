class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    /*
    * 1. keep count of width-> as you move through numbers, cur max area, min height so far, left and right O(n2) 
      2. keep a stack - if the cur num is smaller than top of stack, pop, and calculate area
    */
    largestRectangleArea(heights) {

        let maxArea = 0;
        const stack = []; //(index, height)

        for(let i =0; i < heights.length; i++){
            let start = i;
            while(stack.length > 0 && 
            stack[stack.length - 1][1] > heights[i]){ //compare top of stack height with cur  height
                const [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }
            stack.push([start, heights[i]]);
        }

        // there may be items in stack remainig
         for (const [index, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }
        return maxArea;

    }
}
