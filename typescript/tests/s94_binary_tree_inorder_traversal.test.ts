import { inorderTraversal } from '~/problems/s94_binary_tree_inorder_traversal';
import { createBinaryTree } from '~/libs/binary_tree';
import { name } from './utils';

describe('Binary Tree Inorder Traversal', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: number[];
  }> = [
    {
      input: [3, 9, 20, 11, 13, 6, 7, null, null, 15, 7],
      output: [11, 9, 15, 13, 7, 3, 6, 20, 7],
    },
    {
      input: [3, 9, 20, null, null, 15, 7],
      output: [9, 3, 15, 20, 7],
    },
    {
      input: [1, null, 2],
      output: [1, 2],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 6, 6, 6],
      output: [6, 4, 6, 2, 5, 1, 6, 3, 6],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      const output = inorderTraversal(root);
      expect(output).toEqual(example.output);
    });
  }
});
