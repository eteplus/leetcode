import { ListNode } from '~/libs/linked_list';

/**
 * @link https://leetcode.com/problems/linked-list-cycle/
 * @param head
 * @returns
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }
  let curr: ListNode | null = head;
  const nodes = new Set<ListNode>();
  while (curr) {
    if (nodes.has(curr)) {
      return true;
    }
    nodes.add(curr);
    curr = curr.next;
  }
  return false;
}

export function hasCycleWithTwoPointers(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    if (slow) {
      slow = slow.next;
    }
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
