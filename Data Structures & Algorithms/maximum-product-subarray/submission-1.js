class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxEndingHere = nums[0];
        let minEndingHere = nums[0];
        let result = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];

            // Preserve previous values before updating either variable.
            const prevMax = maxEndingHere;
            const prevMin = minEndingHere;

            maxEndingHere = Math.max(
                num,
                num * prevMax,
                num * prevMin
            );

            minEndingHere = Math.min(
                num,
                num * prevMax,
                num * prevMin
            );

            result = Math.max(result, maxEndingHere);
        }

        return result;
    }
}
