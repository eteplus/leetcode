import { mergeTwoLists } from '~/problems/s21_merge_two_sorted_lists';
import { createLinkNode, parseLinkNode } from '~/libs/link_node';
import { name } from './utils';

describe('Merge Two Sorted Lists', () => {
  const examples: Array<{
    input: [number[], number[]];
    output: number[];
  }> = [
    {
      input: [[1, 3, 4], [1, 2, 4]],
      output: [1, 1, 2, 3, 4, 4],
    },
    {
      input: [[], []],
      output: [],
    },
    {
      input: [[1], []],
      output: [1],
    },
    {
      input: [[1, 2, 3, 4, 5], [2, 4]],
      output: [1, 2, 2, 3, 4, 4, 5],
    },
    {
      input: [[1, 2, 3, 4, 5], [2, 5]],
      output: [1, 2, 2, 3, 4, 5, 5],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const list1 = createLinkNode(example.input[0]);
      const list2 = createLinkNode(example.input[1]);
      const output = mergeTwoLists(list1, list2);
      expect(parseLinkNode(output)).toEqual(example.output);
    })
  }
});
