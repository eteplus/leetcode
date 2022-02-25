import { ListNode } from '~/libs/linked_list';

/**
 * @link https://leetcode.com/problems/reorder-list/
 * @param head
 * @returns
 */
export function reorderList(head: ListNode | null): void {
  if (!head) {
    return;
  }
  const nodes = [];
  let node: ListNode | null = head;
  while (node) {
    nodes.push(node);
    node = node.next;
  }
  let i = 0;
  let j = nodes.length - 1;
  while (i < j) {
    nodes[i].next = nodes[j];
    i++;
    nodes[j].next = nodes[i];
    j--;
  }
  nodes[i].next = null;
}