class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    /*
    * 1. naive - for every number, count the number of days when there is a warmer day - O(n2) - 2 loops
    2. move from backwards -> for every number, count the dist between cur and nextMax (maxsofar, immediate right )
    result[i] => min dist of the next big number 
    **/
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        const stack = []; //store indices

        for(let i =0; i < temperatures.length; i++){
            // While stack is not empty and current temp is warmer than temp at stack top
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
                const prevIndex = stack.pop();
                res[prevIndex] = i - prevIndex;  // Days difference
            }
            stack.push(i);
        }
        return res;
    }
}
