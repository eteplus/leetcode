import { ListNode } from '~/libs/linked_list'

/**
 * @link https://leetcode.com/problems/merge-two-sorted-lists/
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  let dummy = new ListNode(0);
  let tail = dummy;
  let left: ListNode | null = list1;
  let right: ListNode | null = list2;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }
  if (left !== null) {
    tail.next = left;
  } else if (right !== null) {
    tail.next = right;
  }
  return dummy.next;
}
