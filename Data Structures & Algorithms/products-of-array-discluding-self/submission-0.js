class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let output = [];
       let left = 1;
       for (let i = 0; i < nums.length; i++){
            // build arr by multiplying elements 
            // to the left of current num
            output[i] = left;
            left = left * nums[i];
            
       }
       let right = 1;
       for(let j = nums.length-1; j>=0 ; j--){
            output[j] = output[j] * right;
            right = right * nums[j];
            
       }
    return output;

    }
}

//[1, 1, 2, 8] left -> it is created without the current number
// [] traverse from right 8 * 1, 2*6, 1*4*6, 1*4*6*2] 
// -> multiply what we have so far * cur num from left arr 
