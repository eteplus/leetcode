import { preorderTraversal } from '~/problems/s144_binary_tree_preorder_traversal';
import { createBinaryTree } from '~/libs/binary_tree';
import { name } from './utils';

describe('Binary Tree Preorder Traversal', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: number[];
  }> = [
    {
      input: [3, 9, 20, 11, 13, 6, 7, null, null, 15, 7],
      output: [3, 9, 11, 13, 15, 7, 20, 6, 7],
    },
    {
      input: [3, 9, 20, null, null, 15, 7],
      output: [3, 9, 20, 15, 7],
    },
    {
      input: [1, null, 2],
      output: [1, 2],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 6, 6, 6],
      output: [1, 2, 4, 6, 6, 5, 3, 6, 6],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      const output = preorderTraversal(root);
      expect(output).toEqual(example.output);
    });
  }
});
