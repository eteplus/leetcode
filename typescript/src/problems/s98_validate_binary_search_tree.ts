import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/validate-binary-search-tree/
 * @param root
 */
export function isValidBST(root: TreeNode | null): boolean {
  const traverse = (node: TreeNode | null, min: number, max: number): boolean => {
    if (!node) return true;

    if (node.val <= min) return false;
    if (node.val >= max) return false;

    return (
      traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
    );
  };

  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}