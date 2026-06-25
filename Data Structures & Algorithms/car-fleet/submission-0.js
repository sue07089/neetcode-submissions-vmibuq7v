class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    /**
     * 1. sort the positions, keep corresponding speeds
     * 10 - 4 = 6/2 = 3 hours
     * 10 - 1 = 9/3 = 3 hours
     * 
     * 7, 4, 1, 0
     * 1, 2, 1, 1
     * 3/1, 6/2, 9/1, 10/1
     * 3, 3, 9, 10
     */
    carFleet(target, position, speed) {

        let pair = position.map((p,i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);
        let stack = [];
        for (let [p, s] of pair) {
            stack.push((target - p) / s);
            if (
                stack.length >= 2 &&
                stack[stack.length - 1] <= stack[stack.length - 2] //compare top 2
            ) {
                stack.pop();
            }
        }
        return stack.length;
        
    }
}
