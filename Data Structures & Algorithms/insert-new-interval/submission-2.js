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

        //Approach 1 
        intervals.push(newInterval);
        if(intervals.length < 2) return intervals;
        //sort
        intervals.sort((a, b) => a[0] - b[0]);

        //check if overlapping, if endFirst > startSecond
        let startFirst = intervals[0][0];
        let endFirst = intervals[0][1];
        const newIntervals = [];
        for(let i = 1; i < intervals.length; i++){
            const startSecond = intervals[i][0];
            const endSecond = intervals[i][1];
            if(endFirst >= startSecond){
                //merge 
                endFirst = Math.max(endFirst, endSecond);
            }
            else {
                //push to new, not overlapping
                newIntervals.push([startFirst, endFirst]);
                //new startFirst and end endFirst
                startFirst = startSecond;
                endFirst = endSecond;
            }

        }
        console.log([startFirst, endFirst]);
        newIntervals.push([startFirst, endFirst]);
        return newIntervals ;


    }
}
