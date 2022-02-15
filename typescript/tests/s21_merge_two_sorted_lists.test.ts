import { mergeTwoLists } from '~/problems/s21_merge_two_sorted_lists';
import { createLinkedList, parseLinkedList } from '~/libs/linked_list';
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
      const list1 = createLinkedList(example.input[0]);
      const list2 = createLinkedList(example.input[1]);
      const output = mergeTwoLists(list1, list2);
      expect(parseLinkedList(output)).toEqual(example.output);
    })
  }
});
