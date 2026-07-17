class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        if(k > nums.length) return -1;

        const heap = new MinPriorityQueue();

        for(const i of nums){
            if(heap.size() < k){
                heap.enqueue(i);
            } else if (i > heap.front()) {
                heap.dequeue();
                heap.enqueue(i);
            }
        }

        return heap.front();
    }
}
