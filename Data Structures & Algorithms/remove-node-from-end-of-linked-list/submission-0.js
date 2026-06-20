/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
/**
 * 1. find len k by traversing the list and then using a counter k - n in second pass to remove the node
 * 2. other solution is that we have 2 pointers and they always maintain a dist of n, when fast pointer is null, 
 * then slow is at the nth node
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(head === null) return;

        let slow = head;
        let fast = head;

        while(n !== 0 && fast){ 
            fast = fast.next; //null
            n--; //0
        }

       
        if(n > 0) return null;
         //keep note: edge case where n === list len
        if(fast === null) return head.next; //had to delete the first node

        while(fast.next){
            slow = slow.next; 
            fast = fast.next; 
        }

        //to delete -> slow.next
        slow.next = slow.next.next;


        return head;



    }
}
