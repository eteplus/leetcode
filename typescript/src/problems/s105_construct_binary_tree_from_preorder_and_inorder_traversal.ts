import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param preorder
 * @param inorder
 */
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
  root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
  return root;
}
