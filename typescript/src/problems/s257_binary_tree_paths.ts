import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/binary-tree-paths/
 * @param root
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
  if (root === null) {
    return [];
  }
  const paths: string[] = [];
  const trasverse = (node: TreeNode | null, path: string) => {
    if (node === null) {
      return;
    }
    if (node.left === null && node.right === null) {
      paths.push(path);
      return;
    }
    if (node.left !== null) {
      trasverse(node.left, path + '->' + node.left.val);
    }
    if (node.right !== null) {
      trasverse(node.right, path + '->' + node.right.val);
    }
  };
  trasverse(root, root.val.toString());
  return paths;
}