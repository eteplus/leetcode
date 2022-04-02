import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * @param root
 * @param k
 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) {
    return 0;
  }
  let stack: TreeNode[] = [];
  let curr: TreeNode | null = root;
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      if (curr.val !== null) {
        stack.push(curr);
      }
      curr = curr.left;
    }
    curr = stack.pop() ?? null;
    if (curr && curr.val !== null) {
      k -= 1;
      if (k === 0) {
        return curr.val;
      }
    }
    curr = curr?.right ?? null;
  }
  return 0;
}