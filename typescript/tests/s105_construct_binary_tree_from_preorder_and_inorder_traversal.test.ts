import { buildTree } from '~/problems/s105_construct_binary_tree_from_preorder_and_inorder_traversal';
import { createBinaryTree, TreeNode } from '~/libs/binary_tree';
import { name } from './utils';

describe('Construct Binary Tree from Preorder and Inorder Traversal', () => {
  const examples: Array<{
    input: number[][];
    output: TreeNode | null;
  }> = [
    {
      input: [
        [3, 9, 20, 15, 7],
        [9, 3, 15, 20, 7],
      ],
      output: createBinaryTree([3, 9, 20, null, null, 15, 7], 0),
    },
    {
      input: [[-1], [-1]],
      output: createBinaryTree([-1], 0),
    },
    {
      input: [
        [3, 9, 11, 13, 15, 7, 20, 6, 7],
        [11, 9, 15, 13, 7, 3, 6, 20, 7],
      ],
      output: createBinaryTree([3, 9, 20, 11, 13, 6, 7, null, null, 15, 7], 0),
    },
    {
      input: [[], []],
      output: null,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [preorder, inorder] = example.input;
      expect(buildTree(preorder, inorder)).toEqual(example.output);
    });
  }
});
