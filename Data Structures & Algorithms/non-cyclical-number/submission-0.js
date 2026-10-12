class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        
        
        let seenSet = new Set();
        
        while (!seenSet.has(n)){
            seenSet.add(n);
            n = this.sumOfSquares(n);
            if(n === 1) return true;
        }
         
        return false;
        
    }
    
    sumOfSquares(n) {
        let output = 0;
        while (n > 0){
            let k = n % 10;
            output += k * k;
            n = Math.floor(n/10);
        }
        return output;
    }


}
