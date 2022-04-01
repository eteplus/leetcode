import { TreeNode } from '~/libs/binary_tree';

/**
 * @link https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @param root
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const result: number[][] = [];
  const stack: TreeNode[] = [root];
  while (stack.length > 0) {
    const level: number[] = [];
    const length = stack.length;
    for (let i = 0; i < length; i++) {
      const node = stack.shift() as TreeNode;
      // console.log( node);
      if (node.val !== null) {
        level.push(node.val);
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    // console.log(level)
    result.push(level);
  }
  return result;
}
