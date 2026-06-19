class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens) {
        function operate(symbol, first, second){
            console.log(symbol);
            if(symbol === '+'){
                return first + second;
            }
            if(symbol === '-'){
                return first - second;
            }
            if(symbol === '*'){
                return first * second;
            }
            if(symbol === '/'){
                return Math.trunc(first / second);
            }
        }
        let res = [];
        for(let token of tokens){
           
            if(Number.isFinite(Number(token))){
                res.push(Number(token)); 
                
            }
            else{
                
                const sec = res.pop();
                const first = res.pop();
                const newNum = operate(token, first, sec);
                res.push(newNum);
            }
            
        }
        return Math.trunc(res[0]);
    }
}
