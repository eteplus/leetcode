import { ListNode } from '~/libs/link_node'

/**
 * @link https://leetcode.com/problems/reverse-linked-list-ii/
 */
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let dummy: ListNode = new ListNode(0, head);
  let prev: ListNode | null = dummy;
  let cur: ListNode | null = dummy.next;
  for (let i = 0; i < left - 1; i++) {
    prev = cur;
    cur = prev?.next ?? null;
  }
  for (let i = 0; i < right - left; i++) {
    if (cur === null || prev === null) {
      break;
    }
    let temp: ListNode | null = cur.next;
    cur.next = temp?.next ?? null;
    if (temp) {
      temp.next = prev.next;
    }
    prev.next = temp;
  }
  return dummy.next;
}
