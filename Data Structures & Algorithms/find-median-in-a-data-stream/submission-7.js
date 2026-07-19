class MedianFinder {
    constructor() {
        this.lower = new MaxPriorityQueue(); //store max from lower half
        this.upper = new MinPriorityQueue(); //store min from upper half
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    // let lower have extra num so that if stream has odd elements then lower.front is the ans
    addNum(num) {
        const lowerSize = this.lower.size();
        const upperSize = this.upper.size();
        const diff = lowerSize - upperSize;

        if (lowerSize === 0 || num <= this.lower.front()) {
        if (diff < 1) {
            this.lower.enqueue(num);
        } else {
            const removed = this.lower.dequeue();
            this.lower.enqueue(num);
            this.upper.enqueue(removed);
        }
    } else {
        if (diff <= 0) {
            this.upper.enqueue(num);
            const removed = this.upper.dequeue();
            this.lower.enqueue(removed);
        } else {
            this.upper.enqueue(num);
        }
    }
    }


    /**
     * @return {number}
     */
    findMedian() {
        //even
        if((this.lower.size() + this.upper.size()) % 2 === 0){
            return (this.lower.front() + this.upper.front()) / 2.0;
        }
            return this.lower.front();
    }
}
