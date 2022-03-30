import { isSubtree } from '~/problems/s572_subtree_of_another_tree';
import { createBinaryTree } from '~/libs/binary_tree';
import { name } from './utils';

describe('Subtree of Another Tree', () => {
  const examples: Array<{
    input: Array<Array<number | null>>;
    output: boolean;
  }> = [
    {
      input: [
        [1, 2, 3],
        [1, 2, 3],
      ],
      output: true,
    },
    {
      input: [
        [1, 1],
        [1],
      ],
      output: true
    },
    {
      input: [
        [3, 4, 5, 1, 2, null, null, null, null, 0],
        [4, 1, 2],
      ],
      output: false,
    },
    {
      input: [
        [3, 4, 5, 1, 2],
        [4, 1, 2],
      ],
      output: true,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input[0], 0);
      const subRoot = createBinaryTree(example.input[1], 0);
      expect(isSubtree(root, subRoot)).toEqual(example.output);
    });
  }
});
