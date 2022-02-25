export class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkedList(nums: number[]): ListNode | null {
  let head: ListNode | null = null;
  let curr: ListNode | null = null;
  for (let num of nums) {
    if (head === null) {
      head = new ListNode(num);
      curr = head;
    } else if (curr !== null) {
      curr.next = new ListNode(num);
      curr = curr.next;
    }
  }
  return head;
}

export function createCycleLinkedList(nums: number[], pos: number): ListNode | null {
  let head: ListNode | null = null;
  let curr: ListNode | null = null;
  let cycle: ListNode | null = null;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!head) {
      head = new ListNode(num);
      curr = head;
    } else if (curr !== null) {
      curr.next = new ListNode(num);
      curr = curr.next;
    }
    if (i === pos) {
      cycle = curr;
    }
  }
  if (curr) {
    curr.next = cycle;
  }
  return head;
}

export function parseLinkedList(head: ListNode | null): number[] {
  let result: number[] = [];
  let curr: ListNode | null = head;
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}
