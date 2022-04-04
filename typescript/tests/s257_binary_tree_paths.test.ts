import { binaryTreePaths } from '~/problems/s257_binary_tree_paths';
import { createBinaryTree } from '~/libs/binary_tree';
import { name } from './utils';

describe('Binary Tree Paths', () => {
  const examples: Array<{
    input: Array<number | null>;
    output: string[];
  }> = [
    {
      input: [1, 2, 3, null, 5],
      output: ['1->2->5', '1->3'],
    },
    {
      input: [5, 1, 4, null, null, 3, 6],
      output: ['5->1', '5->4->3', '5->4->6'],
    },
    {
      input: [2, 1, 3],
      output: ['2->1', '2->3'],
    },
    {
      input: [2, 2, 2],
      output: ['2->2', '2->2'],
    },
    {
      input: [5, 4, 6, null, null, 3, 7],
      output: ['5->4', '5->6->3', '5->6->7'],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const root = createBinaryTree(example.input, 0);
      expect(binaryTreePaths(root)).toEqual(example.output);
    });
  }
});
