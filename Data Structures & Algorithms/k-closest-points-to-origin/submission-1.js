class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxPriorityQueue((point) => Math.sqrt(point[0] ** 2 + point[1] ** 2));

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