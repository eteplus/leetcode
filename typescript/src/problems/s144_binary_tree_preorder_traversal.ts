import { TreeNode } from '~/libs/binary_tree';

/**
 * Runtime: 82ms
 * Memory Usage: 44.7 MB
 * @link https://leetcode.com/problems/binary-tree-preorder-traversal/
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const result: number[] = [];
  const traverse = (node: TreeNode | null) => {
    if (node === null || node.val === null) {
      return;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return result;
}

/**
 * Runtime: 77 ms
 * Memory Usage: 44.8 MB
 */
export function preorderTraversalFromStack(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const result: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node) {
      if (node.val !== null) {
        result.push(node.val);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  }
  return result;
}


/**
 * Runtime: 107 ms
 * Memory Usage: 44.7 MB
 */
export function preorderTraversalFromStackTwo(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let cur: TreeNode | null = root;
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      if (cur.val !== null) {
        result.push(cur.val);
      }
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop()?.right ?? null;
  }
  return result;
}