import { ListNode } from '~/libs/linked_list';

/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * @param head
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let current = head;
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}