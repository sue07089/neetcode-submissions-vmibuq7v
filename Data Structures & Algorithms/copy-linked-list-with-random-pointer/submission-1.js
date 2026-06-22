// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    /**
     * first approach
     * create all nodes then use 2 loops to link random
     * second approach
     * keep creating map of new nodes until you hit end of orginal list
     * then in second pass, find the random node in the map and link the random node
     */

    copyRandomList(head) {
        if (head===null) return null;
        const newMap = new Map();

        //first pass
        let prevNew = new Node(head.val);
        const firstNewnode = prevNew;
        newMap.set(head, prevNew); //add first node
        let curOld = head.next;

        while(curOld){
            const newN = new Node(curOld.val);
            prevNew.next = newN;
            newMap.set(curOld, newN);
            prevNew = newN;
            curOld = curOld.next;
        }

        //second pass
        for(const [key, value] of newMap){
            value.random = newMap.get(key.random) ?? null;
        }

        return firstNewnode;
    }
}
