class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     * 1. convert list to string -> string to number -> add 1 and convert to str -> list
     * 2. Starting from end, add 1 and if there is a carry remaining return new array with first element as carry
     */
    plusOne(digits) {
        var res = new Array(digits.length).fill(0);
        var carry = 0; 
        if(digits[digits.length - 1] === 9){
             res[digits.length - 1] = 0;
             carry = 1;
           }
        else {
             res[digits.length - 1] = digits[digits.length - 1] + 1;
        }
   
        for(let i = digits.length - 2; i > -1; i--){
           if(digits[i] == 9 && carry == 1){
             res[i] = 0;
             carry = 1;
           }
           else{
            res[i] = digits[i] + carry;
            carry = 0; 
           }
        }
        
        return carry ? [carry, ...res] : res ;
    }
}
