import { createBinaryTree } from '~/libs/binary_tree';
import { diameterOfBinaryTree } from '~/problems/s543_diameter_of_binary_tree';
import { name } from './utils';

describe('Diameter of Binary Tree', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: number;
  }> = [
    {
      input: [3, 9, 20, 11, 13, 6, 7, null, null, 15, 7],
      output: 5,
    },
    {
      input: [3, 9, 20, null, null, 15, 7],
      output: 3,
    },
    {
      input: [1, null, 2],
      output: 1,
    },
    {
      input: [1, 2, 3, 4, 5, 6, 6, 6, 6],
      output: 5,
    },
    {
      input: [1, 2, 3, 4, 5],
      output: 3,
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      const output = diameterOfBinaryTree(root);
      expect(output).toEqual(example.output);
    });
  }
});
