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
*first - traverse till end and build the number as you go, ones place, 10s place, etc 
and add the 2 number and create linked list of result
second - reverse the lists, add numbrs with carry and reverse results
third - keep adding both numbers and track forward carry
*/
class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        if(l1 === null) return l2;
        if(l2 === null) return l1;

        const res = new ListNode(0);
        let newN = res;
        let carry = 0;

        while(l1 || l2 || carry){
            const x = l1 ? l1.val : 0;
            const y = l2 ? l2.val : 0;

            const sum = x + y + carry;
            carry = Math.floor(sum / 10);

            newN.next = new ListNode(sum % 10);
            newN = newN.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return res.next;

    }
}
