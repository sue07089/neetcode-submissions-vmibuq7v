class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    // create map with wordcount for all wordList
    // create directed graph/adj list of words that differ only by a single letter
    // find the endWord through bfs choosing the path that will reach the end word in shortest # of steps 
    ladderLength(beginWord, endWord, wordList) {

        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        function getNeighbors(word, wordSet) {
            const unvisitedNeighbors = [];
            for (let j = 0; j < word.length; j++) {
                for (const letter of alphabet) {
                    const w = word.slice(0, j) + letter + word.slice(j + 1);
                    if (wordSet.has(w)) {
                        unvisitedNeighbors.push(w);
                        wordSet.delete(w); // mark next_word as visited
                    }
                }
            }
            return unvisitedNeighbors;
        }

       const wordSet = new Set(wordList);
       wordSet.delete(beginWord);
       let counter = 0;
       if (!wordSet.has(endWord) || beginWord === endWord) {
            return 0;
        }
        const q = [beginWord];

        while(q.length > 0){
            const len = q.length;
            counter ++;
            for(let i = 0; i < len; i++){
                const node = q.shift();
                if(node === endWord) return counter;
                //generate all combinations of 26 letter replaced for every c in word
                for (const w of getNeighbors(node, wordSet)) {
                    if (w === endWord) return counter + 1; //return correctly
                        q.push(w);
            }

            }
        }  



       return 0;


    }
}
