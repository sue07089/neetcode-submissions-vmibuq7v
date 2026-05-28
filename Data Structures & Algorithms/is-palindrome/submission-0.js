class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isNonAlphaNumeric(char){
        const code = char.charCodeAt(0);
        return !((code > 47 && code < 58) ||   // numeric (0-9)
         (code > 96 && code < 123));   // lower alpha (a-z)
    }

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        s = s.toLowerCase();
        while(left < right){
            // ignore non alphanumeric chars
            if (this.isNonAlphaNumeric(s[left])) { left++; continue; }
            if (this.isNonAlphaNumeric(s[right])) { right--; continue; }
            if(s[left] !== s[right]){
                return false;
            }
            left ++;
            right --; 
        }
        return true;
    }
}
