class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        if(intervals.length <= 1) return 0;

        intervals.sort((a, b) => a[0] - b[0]);
        let endFirst = intervals[0][1];
        let ans = 0;

        for(let i = 1; i < intervals.length; i++){
            let startSecond = intervals[i][0];
            let endSecond = intervals[i][1];

            if(endFirst > startSecond){
                ans ++;
                endFirst = Math.min(endFirst, endSecond);
            }else{
                endFirst = endSecond;
            }
        }

        return ans;
    }
}
