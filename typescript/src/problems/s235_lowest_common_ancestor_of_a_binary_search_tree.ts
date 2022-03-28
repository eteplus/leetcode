import { TreeNode } from '~/libs/binary_tree';

/**
 * @link
 * @param root
 * @param p
 * @param q
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }
  console.log(root, p, q);
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}