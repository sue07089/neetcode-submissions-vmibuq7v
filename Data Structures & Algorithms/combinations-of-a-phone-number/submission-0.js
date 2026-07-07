class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let digitMap = {
            2: ['a', 'b', 'c'],
            3:  ['d', 'e', 'f'],
            4:  ['g', 'h', 'i'],
            5:  ['j', 'k', 'l'],
            6:  ['m', 'n', 'o'],
            7:  ['p', 'q', 'r', 's'],
            8:  ['t', 'u', 'v'],
            9:  ['w', 'x', 'y', 'z'],
        };
        let res = [];
        if (digits.length === 0) return res;

        function dfs(start, combination){
            if(combination.length === digits.length)
                {
                    res.push(combination.join(''));
                    return;
                }


                    let arr = digitMap[digits[start]];
                    for(let j = 0; j < arr.length; j++){
                        combination.push(arr[j]);
                        dfs(start+1, combination);
                        combination.pop();
                    }
               

        }

        dfs(0, []);
        return res;
    }
}
