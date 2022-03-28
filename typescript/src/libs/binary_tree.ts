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

export function createBinaryTree(nums: Array<number | null>, index: number): TreeNode | null {
  if (index < nums.length) {
    const node = new TreeNode(nums[index] as number);
    node.left = createBinaryTree(nums, index * 2 + 1);
    node.right = createBinaryTree(nums, index * 2 + 2);
    return node;
  }
  return null;
}

export function findNode(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  const left = findNode(root.left, val);
  if (left) {
    return left;
  }
  return findNode(root.right, val);
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
