class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums  = new MinPriorityQueue();
        this.k = k; 

        //add elements from nums to Heap
        for(let i = 0; i < nums.length; i++){
            this.nums.enqueue(nums[i]);
        }

        //remove k elements
        while(this.nums.size() > this.k){
            this.nums.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {

        this.nums.enqueue(val);
        //only store k elements in heap
        if(this.nums.size() > this.k){
            this.nums.dequeue();
        }
        return this.nums.front();

    }
}
