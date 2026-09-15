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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
       // sort intervals by start time
       // count overlaps -> for every overlap we need an extra meetingRooms
       // non overlap, same room can be used,
       // to start, we can maintain an array of size intervals.length, as thats the max number of rooms needed, then as we go through interval in intervals, we store the end time of the meeting in room i. that room is not released until, the start time is at or after end time stored in there.
       //result will be non zero indices -> O(n2)

       //sweepline algo

       const n = intervals.length;
        //edge cases
       if(n<2) return n; 
       const arr = [];
       for(const i of intervals){
        arr.push([i.start, 1]);
        arr.push([i.end, -1]);
       }
      

    //    function findEmptyRoom(newStartTime, newEndTime) { //O(n)
    //        for(let i = 0; i < n; i++){
    //              if(newStartTime >= arr[i]){
    //                 arr[i] = newEndTime; //book the room until newEndTime
    //              }
    //        }
    //    }

       //  primarily by time secondarily by event type so that end events (-1) are processed before start events (+1) at the same time
        arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] :
        a[0] - b[0]);

        let res = 0;
        let count = 0;

        for (const event of arr){
            count += event[1];
            res = Math.max(res, count);
        }
        
        return res;
       
       
    }
}
