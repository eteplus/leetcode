import { isSameTree } from '~/problems/s100_same_tree';
import { createBinaryTree } from '~/libs/binary_tree';
import { name } from './utils';

describe('Same Tree', () => {
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
        [1, 2],
        [1, null, 2],
      ],
      output: false,
    },
    {
      input: [
        [1, 2, 1],
        [1, 1, 2],
      ],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const p = createBinaryTree(example.input[0], 0);
      const q = createBinaryTree(example.input[1], 0);
      expect(isSameTree(p, q)).toEqual(example.output);
    });
  }
});
