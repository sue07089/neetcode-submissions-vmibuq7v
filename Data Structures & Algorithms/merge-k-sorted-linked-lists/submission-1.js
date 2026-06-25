/**
 * Definition for singly-linked list.
 * class ListNode {
 *   constructor(val = 0, next = null) {
 *     this.val = val;
 *     this.next = next;
 *   }
 * }
 */

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */

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
