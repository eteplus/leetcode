import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/diameter-of-binary-tree/
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let result = 0;
  const traverse = (node: TreeNode | null, depth: number): number => {
    if (node === null || node.val === null) {
      return depth;
    }
    let left_max = traverse(node.left, 0);
    let right_max = traverse(node.right, 0);
    result = Math.max(result, left_max + right_max);
    return Math.max(left_max, right_max) + 1;
  };
  traverse(root, 0);
  return result;
}