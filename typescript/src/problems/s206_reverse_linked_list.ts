import { ListNode } from '~/libs/linked_list'

/**
 * @link https://leetcode.com/problems/reverse-linked-list/
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr !== null) {
    let next: ListNode | null = curr.next;
    curr.next = prev
    prev = curr;
    curr = next;
  }
  return prev;
}

export function reverseListByRecurcise(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const next = head.next;
  const root = reverseListByRecurcise(next);
  next.next = head;
  head.next = null;
  return root;
}