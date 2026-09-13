class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // approach 1 - add the new interval and sort - O(n log n)
        //then we check and merge the intervals - O(n)
        //approach 2 - as we are merging we also check if 
        // the new interval should be merged in or added as a separate interval - O(n)

        // //Approach 1 
        // intervals.push(newInterval);
        // if(intervals.length < 2) return intervals;
        // //sort
        // intervals.sort((a, b) => a[0] - b[0]);

        // //check if overlapping, if endFirst > startSecond
        // let startFirst = intervals[0][0];
        // let endFirst = intervals[0][1];
        // const newIntervals = [];
        // for(let i = 1; i < intervals.length; i++){
        //     const startSecond = intervals[i][0];
        //     const endSecond = intervals[i][1];
        //     if(endFirst >= startSecond){
        //         //merge 
        //         endFirst = Math.max(endFirst, endSecond);
        //     }
        //     else {
        //         //push to new, not overlapping
        //         newIntervals.push([startFirst, endFirst]);
        //         //new startFirst and end endFirst
        //         startFirst = startSecond;
        //         endFirst = endSecond;
        //     }

        // }
        // newIntervals.push([startFirst, endFirst]);
        // return newIntervals;

        //Approach 2 - without sorting
        if (intervals.length < 1) return [newInterval];

        //seed with new interval
        let startFirst = newInterval[0];
        let endFirst = newInterval[1];
        const newIntervals = [];
        let isNewAdded = false;

        for (let i = 0; i < intervals.length; i++) {
            const startSecond = intervals[i][0];
            const endSecond = intervals[i][1];

            if (endSecond < startFirst) {
                // existing interval ends before newInterval starts
                newIntervals.push([startSecond, endSecond]);
            } else if (startSecond > endFirst) {
                // existing interval starts after newInterval ends
                if (!isNewAdded) {
                    newIntervals.push([startFirst, endFirst]);
                    isNewAdded = true;
                }
                newIntervals.push([startSecond, endSecond]);
            } else {
                // overlap — merge
                startFirst = Math.min(startFirst, startSecond);
                endFirst = Math.max(endFirst, endSecond);
            }
        }

        if (!isNewAdded) newIntervals.push([startFirst, endFirst]);

        return newIntervals;

    }
}
