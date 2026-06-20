class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    /*
    * 1. naive - for every number, count the number of days when there is a warmer day - O(n2) - 2 loops
    2. For every number, pop all smaller temperatures from the stack (recording their distance to current), 
then push current index — maintaining a decreasing stack that tracks unresolved temperatures 
waiting for their next warmer day.
Monotonic decreasing stack: when a warmer temperature arrives, 
it resolves all cooler waiting temperatures in the stack.
    **/
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        const stack = []; //store indices

        for(let i = temperatures.length-1; i >= 0 ; i--){
            while(stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]){
                stack.pop();
            }
            if(stack.length > 0){
                //top one can be used to calculate diff
                res[i] = stack[stack.length-1] - i;
            }
            stack.push(i);
        }
        return res;
    }
}
