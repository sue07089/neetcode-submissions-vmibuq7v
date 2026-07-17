class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxPriorityQueue(([x,y]) => Math.sqrt(x ** 2 + y ** 2));

        for (const point of points) {
            heap.enqueue(point);

            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const res = [];
        while (heap.size() > 0) {
            res.push(heap.dequeue());
        }

        return res;
    }
}