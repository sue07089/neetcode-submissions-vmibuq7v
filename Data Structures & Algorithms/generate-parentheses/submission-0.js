class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    
    backtrack (open, close, n, res, stack){
        if(open === close && open === n){
            res.push(stack);
            return; //we have the answer
         }
         
         if(open < n){
            //add open to stack
            this.backtrack(open + 1, close, n, res, stack + '(' );
         }

         if(close < open){
            this.backtrack(open, close+1, n, res, stack + ')' );
         }

    }

    generateParenthesis(n) {
        const res = [];
        this.backtrack(0, 0, n, res, '');
        return res;
    }
}
