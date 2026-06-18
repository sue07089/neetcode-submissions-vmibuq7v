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
 * check first element of both list, smaller one becomes the head of new list, if they are equal choose one
 * traverse both list simultaneously, at each step pick the smaller one and increment, let the other list pointer stay
 * if you run out of 1 list, jstt append the second list as is
 */
class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    mergeTwoLists(list1, list2) {
        // Create dummy node (placeholder, not part of final list)
        const dummy = new ListNode(0);
        let current = dummy;  // Pointer to build the merged list
 
        // Merge until one list is exhausted
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                current.next = list1;  // Attach smaller node
                list1 = list1.next;    // Move to next node in list1
            } else {
                current.next = list2;  // Attach smaller node
                list2 = list2.next;    // Move to next node in list2
            }
            current = current.next;    // Move current pointer forward
        }
 
        // Attach whichever list still has remaining nodes
        // (One of these will be null, so only one attaches)
        current.next = list1 || list2;
 
        // Return dummy.next (skip the dummy, return actual merged list)
        return dummy.next;
    }
}

