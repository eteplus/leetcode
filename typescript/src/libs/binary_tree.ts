/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createBinaryTree(nums: Array<number | null>, root: TreeNode | null, index: number): TreeNode | null {
  if (index < nums.length) {
    let node = new TreeNode(nums[index] as number);
    root = node;
    root.left = createBinaryTree(nums, root.left, index * 2 + 1);
    root.right = createBinaryTree(nums, root.right, index * 2 + 2);
    return root;
  }
  return root;
}

export function parseBinaryTree(root: TreeNode | null): Array<Number | null> {
  if (root === null) {
    return [];
  }
  const result: Array<Number | null> = [];
  const traverse = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
}
