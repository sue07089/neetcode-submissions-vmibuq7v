class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let parts = [];
       for (let string of strs) {
            parts.push(String.fromCharCode(string.length));
            parts.push(string);
       }
        let encoded = parts.join("");
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while (i < str.length) {
            let length = str.charCodeAt(i);  // Read 1 byte, convert back to integer
            i++;  // Move past the length byte
            let string = str.substring(i, i + length);  // Read exactly 'length' characters
            decoded.push(string);
            i += length;  // Move past the string data
        }
        return decoded;   
    }
}
