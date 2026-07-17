class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        if(k > nums.length) return -1;

        const heap = new MinPriorityQueue();

        for (const n of nums) {
            heap.enqueue(n);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        return heap.front();
    }
}
