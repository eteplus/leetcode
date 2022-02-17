import { TreeNode } from '~/libs/binary_tree';

/**
 * Runtime: 87ms
 * Memory Usage: 44.8 MB
 * @link https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const result: number[] = [];
  const traverse = (node: TreeNode | null) => {
    if (node === null || node.val === null) {
      return;
    }
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
}

/**
 * Runtime: 86 ms
 * Memory Usage: 44.8 MB
 */
export function inorderTraversalFromStack(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let cur: TreeNode | null = root;
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    if (node) {
      if (node.val !== null) {
        result.push(node.val);
      }
      cur = node.right;
    }
  }
  return result;
}
