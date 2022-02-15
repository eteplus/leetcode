import { maxDepth } from '~/problems/s104_maximum_depth_of_binary_tree';
import { createBinaryTree } from '~/libs/binary_tree';
import { name } from './utils';

describe('Maximum Depth of Binary Tree', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: number;
  }> = [
    {
      input: [3, 9, 20, 11, 13, 6, 7, null, null, 15, 7],
      output: 4,
    },
    {
      input: [3, 9, 20, null, null, 15, 7],
      output: 3,
    },
    {
      input: [1, null, 2],
      output: 2,
    },
    {
      input: [1, 2, 3, 4, 5, 6, 6, 6, 6],
      output: 4,
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, null, 0);
      const output = maxDepth(root);
      expect(output).toEqual(example.output);
    });
  }
});
