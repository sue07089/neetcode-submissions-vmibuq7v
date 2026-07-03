class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    /*
    ** 1. for every element at index i, you have a choice to either pick it or not 
    * keep exploring until sum is equal to target - O(2^n * n)
    * store res in a outer scope array. and in dfs function, pass ans array as arg
    * build one with the number, one without the number at index i, if sum reaches target
    * push ans to res. -> flaw that we may end up with same results
    * to fix it , we can instead sort the input array first
    */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a -b);
        const res = [];

        function dfs(index, ans, sumSoFar) {
            if (sumSoFar === target) { res.push([...ans]); return; }
            if (sumSoFar > target) return;

            const usedAtThisLevel = new Set();
            for (let i = index; i < candidates.length; i++) {
                const val = candidates[i];
                if (usedAtThisLevel.has(val)) continue;
                usedAtThisLevel.add(val);

                ans.push(val);
                dfs(i + 1, ans, sumSoFar + val);
                ans.pop();
            }
        }

        dfs(0, [],0);
        return res;

    }
}
