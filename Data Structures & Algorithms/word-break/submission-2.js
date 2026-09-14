class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // //approach 1 -> bottom up dp
        // const dp = new Array(s.length+1).fill(false);
        // dp[s.length] = true; // empty string

        // for(let i = s.length -1; i >=0; i--){
        //     for(const w of wordDict){
        //         if( i + w.length <= s.length &&
        //            s.slice(i, i+w.length) === w){
        //             dp[i] = dp[i + w.length];
        //            }
        //            if(dp[i])
        //              break;
        //     }
        // }
        // return dp[0];
        //approach 2 - top down dp - recursive

        let memo = {[s.length]: true};
        
        function dfs(i){
            if(i in memo){
                return memo[i];

            }
            for(const w of wordDict){
                if(i + w.length <= s.length &&
                s.substring(i, i+w.length) === w){
                    if(dfs(i + w.length)){
                        memo[i] = true;
                        return true;
                    }
                }
            }
            memo[i] =  false;
            return false;
        }

        return dfs(0);

    }
}
