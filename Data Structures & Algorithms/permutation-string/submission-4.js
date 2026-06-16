class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    let l1 = s1.length;
    let l2 = s2.length;
    if(l1 > l2) return false;
       //use an array to maintain occurences in s1, s2
       let a = new Array(26).fill(0);
       for(let i = 0; i < s1.length; i++){
            // Get index (0 for 'a', 1 for 'b', ..., 25 for 'z')
            const index = s1[i].charCodeAt(0) - 97; 
            a[index]++;
       }
       
       for(let j = l1 -1; j < l2; j++){
        let left = j - l1 + 1;
        let isInclusive = true;
        let curWindowFreq = new Array(26).fill(0);
        for(let p = left; p <= j; p++){
             const index = s2[p].charCodeAt(0) - 97; 
             curWindowFreq[index]++;
        }
        //comapre a and curWindow freq
        for(let k = 0; k < 26; k++){
            if(curWindowFreq[k] !== a[k]) {isInclusive=false; break; }
        }
        if(isInclusive) return true;
       }
        return false;
    }
}
