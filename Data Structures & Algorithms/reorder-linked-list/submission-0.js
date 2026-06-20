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
 * task is to embed nodes starting from end in between starting node
 * 1. pointer that reaches the end to know the len, then we know which positions we need to replace,
 * write a function to reach the element to replace using fast pointer and let slow pointer be at the place of insertion - O(n)
 * 2. calculate the length, traverse until midpoint, create a reversed list after midpoint
 * now, in second pass insert element from reversed list at alternate positions
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reverseList(head){
        if(head === null) return;

        let prev = null;
        let cur = head;

        while(cur){
            let next = cur.next; //store next so that we can change cur to next after swap
            cur.next = prev; // change pointer of cur to prev
            prev = cur; // swap prev with cur
            cur = next; // change cur
             
        }
        return prev; // return prev 
    }
    reachMidNode(head){
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    reorderList(head) {
        if(head === null) return;

        let midNode = this.reachMidNode(head);
        let reversedNode = this.reverseList(midNode.next);
        midNode.next = null;

        let start = head;

        while(reversedNode && start){
            let next = start.next;
            let nextReversed = reversedNode.next;
            start.next = reversedNode;
            reversedNode.next = next;
            start = next;
            reversedNode = nextReversed;
        }

        return head;

    }
}
