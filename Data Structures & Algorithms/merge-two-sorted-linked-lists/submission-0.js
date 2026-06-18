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
    let dummy = new ListNode(0);  // Not from either list
    let current = dummy;

    while(list1 || list2){
        if(list1 === null){
            current.next = list2;
            return dummy.next;
        }
        if(list2 === null){
            current.next = list1;
            return dummy.next;
        }
        if(list1.val <= list2.val){
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    return dummy.next;
}
}
