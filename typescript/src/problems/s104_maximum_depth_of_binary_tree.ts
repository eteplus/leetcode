import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let result = 0;
  const traverse = (node: TreeNode | null, depth: number) => {
    if (node === null) {
      result = Math.max(result, depth);
      return;
    }
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };
  traverse(root, 0);
  return result;
}
