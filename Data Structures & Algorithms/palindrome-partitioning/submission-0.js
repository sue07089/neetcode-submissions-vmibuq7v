class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    /*
    ** 1. []
       [a] [a] [b]
    [aa]  [ab]  [b]
    */
    partition(s) {

        function isPalindrome(t) {
            let start = 0;
            let end = t.length -1;
            while(start < end){
                if(t[start] !== t[end]) return false;
                start ++;
                end --;
            }
            return true;
        }

        let res = [];

        function dfs (start, str) {

            if(start >= s.length ){
                res.push([...str]);
                return;
            }

            for(let i = start; i < s.length; i++){
                  let t = s.substring(start, i+1);
                   if(isPalindrome(t)){
                        str.push(t);
                        dfs(i+1, str);
                        str.pop();
                }
            }
        }

        dfs(0, []);

        return res;

    }
}
