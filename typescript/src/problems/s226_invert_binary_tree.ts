import { TreeNode } from '~/libs/binary_tree';

/**
 * Runtime: 115 ms
 * Memory Usage: 44.1 MB
 * @link https://leetcode.com/problems/invert-binary-tree/
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }
  const traverse = (node: TreeNode | null) => {
    if (node === null || node.val === null) {
      return null;
    }
    let left = traverse(node.left);
    let right = traverse(node.right);
    node.left = right;
    node.right = left;
    return node;
  };
  return traverse(root);
}

/**
 * Runtime: 107 ms
 * Memory Usage: 44.3 MB
 */
export function invertTreeFromStack(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }
  const stack: TreeNode[] = [];
  let cur: TreeNode | null = root;
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    if (node) {
      cur = node.right;
      let left = node.left;
      let right = node.right;
      if (node.left !== null || node.right !== null) {
        node.left = right;
        node.right = left;
      }
    }
  }
  return root;
}
