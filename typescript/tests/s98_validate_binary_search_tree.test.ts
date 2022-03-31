import { createBinaryTree } from '~/libs/binary_tree';
import { isValidBST } from '~/problems/s98_validate_binary_search_tree';
import { name } from './utils';

describe('Validate Binary Search Tree', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: boolean;
  }> = [
    {
      input: [5, 1, 4, null, null, 3, 6],
      output: false,
    },
    {
      input: [2, 1, 3],
      output: true,
    },
    {
      input: [2, 2, 2],
      output: false,
    },
    {
      input: [5, 4, 6, null, null, 3, 7],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      const output = isValidBST(root);
      expect(output).toEqual(example.output);
    });
  }
});
