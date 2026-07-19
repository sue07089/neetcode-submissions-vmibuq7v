class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {

        // create a map with counts of chars
        // for char with most freq, place them at n dist and 
        // repeat that for each char that occurs more than once - use math
        // or keep max heap

        let count = new Array(26).fill(0);
        for (let task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        let maxHeap = new MaxPriorityQueue();
        // add to heap
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) maxHeap.push(count[i]);
        }

        let time = 0;
        let q = new Queue(); //cooldown queue

         while (maxHeap.size() > 0 || q.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                let cnt = maxHeap.pop() - 1;
                if (cnt !== 0) {
                    q.push([cnt, time + n]); //pick the most fre element and push to cooldown
                }
            }

            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.push(q.pop()[0]); //push to heap only after cooldown time has passed
            }

            

         }

        return time;

    }
}
