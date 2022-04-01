import { createBinaryTree } from '~/libs/binary_tree';
import { levelOrder } from '~/problems/s102_binary_tree_level_order_traversal';
import { name } from './utils';

describe('Binary Tree Level Order Traversal', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: number[][];
  }> = [
    {
      input: [5, 1, 4, null, null, 3, 6],
      output: [[5], [1, 4], [3, 6]],
    },
    {
      input: [2, 1, 3],
      output: [[2], [1, 3]],
    },
    {
      input: [5, 4, 6, null, null, 3, 7],
      output: [[5], [4, 6], [3, 7]],
    },
    {
      input: [3, 9, 20, null, null, 15, 7],
      output: [[3], [9, 20], [15, 7]],
    },
    {
      input: [3, 9, 20, 11, 13, 6, 7, null, null, 15, 7],
      output: [[3], [9, 20], [11, 13, 6, 7], [15, 7]],
    },
    {
      input: [],
      output: [],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      const output = levelOrder(root);
      expect(output).toEqual(example.output);
    });
  }
});
