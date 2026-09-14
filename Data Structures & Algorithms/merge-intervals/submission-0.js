class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        
        if(intervals.length < 2) return intervals;
        intervals.sort((a, b) => a[0] - b[0]);

        let startFirst = intervals[0][0];
        let endFirst = intervals[0][1];

        const newIntervals = [];

        for(let i = 0; i < intervals.length; i ++){
            const startSecond = intervals[i][0];
            const endSecond = intervals[i][1];

            if(endFirst >= startSecond){
                 //overlapping
                 endFirst = Math.max(endFirst, endSecond);
            }
            else{
                //push the interval as there is no overlap
                newIntervals.push([startFirst, endFirst]);
                startFirst = startSecond;
                endFirst = endSecond;
            }
        }

        newIntervals.push([startFirst, endFirst]);
        return newIntervals;

    }
}
