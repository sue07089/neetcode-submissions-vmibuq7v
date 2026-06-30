class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /**
     * 1.  for every number you have 2 choices, whether to include that number in the set or not
     * so we can recursively explore the decision tree and bactrack 
     *                    []
     *             [1]              []    
     *     [1, 2]       [1]        [2]      [] 
     * [1, 2, 3] [1,2][1,3] [1]  [2, 3] [2] [3] []
     * 
     * 2. iteratively
     */
    subsets(nums) {

        // function subset(index, res, sub){

        //     if(index === nums.length) {
        //         res.push([...sub]);
        //         return;
        //     }

        //     sub.push(nums[index]);
        //     subset(index + 1, res, sub);
        //     sub.pop();
        //     subset(index + 1, res, sub);
        // }
        
        const res = [[]];
        for(let num of nums){
            let s = res.length;
            for(let i = 0; i < s; i++){
                let sub = res[i].slice();
                sub.push(num);
                res.push(sub);
            }

        }
        //subset(0, res, []);

        return res;
    }
}
