class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let string of strs) {
            let length = string.length;  // Get the length (0-199)
            encoded += String.fromCharCode(length);  // Convert to 1-byte character
            encoded += string;  // Append the actual string data
        }
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
