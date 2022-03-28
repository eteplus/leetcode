import { lowestCommonAncestor } from '~/problems/s235_lowest_common_ancestor_of_a_binary_search_tree';
import { createBinaryTree, findNode } from '~/libs/binary_tree';
import { name } from './utils';

describe('Lowest Common Ancestor of a Binary Search Tree', () => {
  const examples: Array<{
    input: [Array<number | null>, number, number];
    output: number;
  }> = [
    {
      input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8],
      output: 6,
    },
    {
      input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4],
      output: 2,
    },
    {
      input: [[2, 1], 2, 1],
      output: 2,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [nodes, p, q] = example.input;
      const root = createBinaryTree(nodes, 0);
      expect(lowestCommonAncestor(root, findNode(root, p), findNode(root, q))).toEqual(findNode(root, example.output));
    });
  }
});
