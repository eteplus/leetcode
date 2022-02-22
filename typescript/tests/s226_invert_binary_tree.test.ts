import { createBinaryTree } from '~/libs/binary_tree';
import { invertTree } from '~/problems/s226_invert_binary_tree';
import { name } from './utils';

describe('Invert Binary Tree', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: number[];
  }> = [
    {
      input: [4, 2, 7, 1, 3, 6, 9],
      output: [4, 7, 2, 9, 6, 3, 1],
    },
    {
      input: [2, 1, 3],
      output: [2, 3, 1],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      const output = invertTree(root);
      expect(output).toEqual(createBinaryTree(example.output, 0));
    });
  }
});
