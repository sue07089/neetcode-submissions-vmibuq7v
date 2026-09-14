/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length < 2) return true;

        //sort intervals by start times
        intervals.sort((a, b) => a['start'] - b['start']);
        console.log(intervals);


        //now check if there are any overlapping meetings by checking endFirst > startSecond
        let startFirst = intervals[0]['start'];
        let endFirst = intervals[0]['end'];

        for(let i = 1; i < intervals.length; i++){
            const startSecond = intervals[i]['start'];
            const endSecond = intervals[i]['end'];
            console.log(startFirst, endFirst, startSecond, endSecond)

            if(endFirst > startSecond){ // next interval overlaps // 30, 5
                return false;
            }
            startFirst = startSecond;
            endFirst = endSecond;
        }

        return true;
        
    }
}
