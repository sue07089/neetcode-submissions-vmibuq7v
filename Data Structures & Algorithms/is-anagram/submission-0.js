class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        let slen = s.length;
        let tlen = t.length;
        if(slen != tlen){
            return false;
        }
        let counter = 0;
        while(counter < slen){
            // set val in a hashmap
            if(map.has(s[counter])){
                let val = map.get(s[counter]);
                map.set(s[counter], val + 1);
            }
            else{
                map.set(s[counter], 1);
            }
            counter++;
        }
        let tcounter = 0;
        while(tcounter < tlen){
            // find val in a hashmap
            if(map.has(t[tcounter])){
                let val = map.get(t[tcounter]);
                if (val === 0) return false;
                map.set(t[tcounter], val - 1);
            }
            else{
                return false;
            }
            tcounter++;
        }
        
        return true;
    }
}
