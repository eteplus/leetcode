export class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkNode(nums: number[]): ListNode | null {
  let head: ListNode | null = null;
  let cur: ListNode | null = null;
  for (let num of nums) {
    if (head === null) {
      head = new ListNode(num);
      cur = head;
    } else if (cur !== null) {
      cur.next = new ListNode(num);
      cur = cur.next;
    }
  }
  return head;
}

export function parseLinkNode(head: ListNode | null): number[] {
  let result: number[] = [];
  let cur: ListNode | null = head;
  while (cur !== null) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
}

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
