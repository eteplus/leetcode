import { TreeNode } from '~/libs/binary_tree';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null && subRoot === null) {
    return true;
  }
  if (root === null || subRoot === null) {
    return false;
  }
  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}