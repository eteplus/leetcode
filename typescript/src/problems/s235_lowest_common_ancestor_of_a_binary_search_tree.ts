import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @param root
 * @param p
 * @param q
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}