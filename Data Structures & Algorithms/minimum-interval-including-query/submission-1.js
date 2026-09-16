class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        // Sort intervals by start so we can sweep through them left-to-right
        intervals.sort((a, b) => a[0] - b[0]);

        // Min-heap ordered by interval length (entry[0] = length, entry[1] = right endpoint)
        const minHeap = new MinPriorityQueue((entry) => entry[0]);

        // Map query value -> answer (safe since answer only depends on value, not position)
        const res = {};

        // Pointer into sorted intervals array
        let i = 0;

        // Process queries in increasing order so intervals can be swept in one pass
        const sortedQueries = [...queries].sort((a, b) => a - b);

        for (const q of sortedQueries) {

            // Push every interval that has "started" (left <= q) onto the heap.
            // Each interval is pushed exactly once since i only moves forward.
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                minHeap.enqueue([r - l + 1, r]); // [length, right]
                i += 1;
            }

            // Lazily remove intervals from the top that have already "expired"
            // (their right endpoint is less than the current query)
            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.dequeue();
            }

            // Whatever remains on top (if anything) is guaranteed to cover q
            // and is the shortest such interval, since heap is min-ordered by length
            res[q] = !minHeap.isEmpty() ? minHeap.front()[0] : -1;
        }

        // Restore answers in the original query order
        return queries.map((q) => res[q]);
    }
}