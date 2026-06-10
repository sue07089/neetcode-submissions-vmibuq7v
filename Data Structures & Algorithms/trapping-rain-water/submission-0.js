class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let total = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // height[left] is the limiting side
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                total += leftMax - height[left];
            }
            left++;
        } else {
            // height[right] is the limiting side
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                total += rightMax - height[right];
            }
            right--;
        }
    }

    return total;
}
}
