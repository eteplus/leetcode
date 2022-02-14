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