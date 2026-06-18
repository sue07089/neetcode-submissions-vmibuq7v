class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    /*
    * Naive solution is to have 2 loops - outer loop checks if current ch exists in t, 
    if yes, then check rest of the ch in s to check if all the characters in t exist 
    repeat this until you find string of min length - keep a counter to track 
    */
    minWindow(s, t) {
        let res = "";
        if(s.length < t.length) return res;

        // create a map of t
        const tMap = new Map();
        for(let i = 0; i < t.length; i++){
            tMap.set(t[i], (tMap.get(t[i]) ??  0) + 1);
        }

        //sliding window - look at t.length window size at a time
        // keep moving right until all char from t have been discovered
        // now drop left char until the window is valid with all the char in t
        let left = 0;
        let window = new Map();
        let minLen = Infinity;
        let minLeft = 0;
        let sizeNeeded = tMap.size;
        let formed = 0;

        for(let right = 0; right< s.length; right++){
            const ch = s[right];
            window.set(ch, window.get(ch) + 1 || 1);

            if(tMap.has(ch) && window.get(ch) === tMap.get(ch)){
                formed++;
            }
            
            while(formed === sizeNeeded){
                if(right - left + 1 < minLen){
                    minLen = right - left + 1;
                    minLeft = left;
                }

                const leftCh = s[left];
                window.set(leftCh, window.get(leftCh) - 1);
                if (tMap.has(leftCh) && window.get(leftCh) < tMap.get(leftCh)) {
                    formed--;
                }
                left++;
            }
        }

        return minLen === Infinity ? "" : s.slice(minLeft, minLeft+minLen);
    }
}
