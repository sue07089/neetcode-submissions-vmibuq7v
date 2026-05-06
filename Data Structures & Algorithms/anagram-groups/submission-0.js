class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const str of strs){
            const key = new Array(26).fill(0);
            for (const char of str.toLowerCase()) {
               key[char.charCodeAt(0) - 97]++;
            }
             const k = key.join(',');
             if (!map.has(k)) 
             {  
                map.set(k, []);
             }  
            map.get(k).push(str);
        }  
        return [...map.values()];
    }
}
