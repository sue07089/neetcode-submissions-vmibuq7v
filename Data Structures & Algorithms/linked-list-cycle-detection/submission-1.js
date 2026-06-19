/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
/*
1. we create a set, if the val exists in the set as we traverse the list then there is a cycle -O(n) with O(n) space
2. we have a slow and a fast pointer -> make fast pointer increment by 2 when slow pointer is only 
moving by 1 , if there is a cycle then at some point slow will point to fast. O(n) with O(1) space
*/
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(head === null) return false; //empty linked list
        if(head.next === null) return false; //only 1 node in linked list

        let slow = head;
        let fast = head.next;

        while(fast !== null && fast.next !== null){
            if(slow === fast) return true;
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return false;

    }
}
