class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        let open = [];
        const bracMap = {
            ")" : "(",
            "]" : "[",
            "}" : "{"

        };
        for(let i = 0; i < s.length; i++){
            if(s[i] === "(" || s[i] === "{" || s[i] === "[") open.push(s[i]);
            else {
                if(bracMap[s[i]] !== open.at(-1)) return false;
                open.pop();  
            }
        }
        if (open.length === 0) return true;
        return false;
    }
}
