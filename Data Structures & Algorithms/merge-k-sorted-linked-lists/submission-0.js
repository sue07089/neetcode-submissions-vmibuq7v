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
* 1. go to each start node and compare the nodes, move the pointer forward only 
when you have the Min from all the nodes O(k*n) where n is length of max sub array
2. heap, that contains the smallest number from each list that has remainign nodes
3. divide and conquer - merge list in pairs like merge sort, repeatedly halving the number of lists until 1 remains
*/
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    // Helper: merge two sorted lists (standard LeetCode 21)
    mergeTwo(l1, l2) {
    const dummy = new ListNode(0);
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
        cur.next = l1;
        l1 = l1.next;
        } else {
        cur.next = l2;
        l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1 : l2;
    return dummy.next;
    }

    // Divide & conquer: merge lists in range [left, right]
    mergeRange(lists, left, right) {
        if (left > right) return null;
        if (left === right) return lists[left];
        const mid = Math.floor((left + right) / 2);
        const l = this.mergeRange(lists, left, mid);
        const r = this.mergeRange(lists, mid + 1, right);
        return this.mergeTwo(l, r);
}

    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
            return this.mergeRange(lists, 0, lists.length - 1);
    }
}
