import { createBinaryTree } from '~/libs/binary_tree';
import { kthSmallest } from '~/problems/s230_kth_smallest_element_in_a_bst';
import { name } from './utils';

describe('Kth Smallest Element in a BST', () => {
  const examples: Array<{
    input: [Array<number | null>, number];
    output: number;
  }> = [
    {
      input: [[3, 1, 4, null, 2], 1],
      output: 1,
    },
    {
      input: [[5, 3, 6, 2, 4, null, null, 1], 3],
      output: 3,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input[0], 0);
      const k = example.input[1];
      expect(kthSmallest(root, k)).toEqual(example.output);
    });
  }
});
