/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseList(head){

        let prev = null;
        let cur = head;

        while(cur){
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
           
        }

        return prev;

    }

      getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }

    reverseKGroup(head, k) {

        const dummy = new ListNode(0, head);
        let groupPrev = dummy;
 
        while (true) {
            const kth = this.getKth(groupPrev, k);
            if (!kth) {
                break;
            }

           const groupStart = groupPrev.next; 
           const groupNext = kth.next;

            kth.next = null; //sever the group
            this.reverseList(groupStart);

            groupPrev.next = kth;
            groupStart.next = groupNext;
            groupPrev = groupStart;
        }

        return dummy.next;

    }
}
