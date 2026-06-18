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
 * 2. as we traverse the list, we reverse it and when we reach the end, that becomes the new head - O(N) single pass
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null) return null;
  
        let prev = null;
        let cur = head;

        while(cur){
            let nextNode = cur.next;
            cur.next = prev;
            prev = cur;
            cur = nextNode;

        }
        return prev;
    }
}
