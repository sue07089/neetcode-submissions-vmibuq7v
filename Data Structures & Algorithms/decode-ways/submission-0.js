class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        // function createLetterToNumberMap() {
        //     const map = {};
        //     for (let i = 0; i < 26; i++) {
        //         const letter = String.fromCharCode(65 + i); // 'A' to 'Z'
        //         map[i+1] = String(letter); // "1" to "26"
        //     }
        //     return map;
        // }

        //can pick single digit or double digit if it is less than 26 or greater/equal to 10

        const n = s.length;
        const dp = new Array(n+1).fill(0);

        dp[n] = 1;
        for (let i = n - 1; i >= 0; i--) {
            if(s.charAt(i) === '0' ){
                dp[i] = 0;
            }
            else{
                dp[i] = dp[i+1];
                if(i+1 < n && (s.charAt(i) === '1' ||
                        (s.charAt(i) === '2' && s.charAt(i + 1) < '7') )){
                          dp[i] += dp[i+2];   
            }

        }

        
    }
     return dp[0];
}
}