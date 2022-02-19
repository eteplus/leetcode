import { reverseList } from '~/problems/s206_reverse_linked_list';
import { createLinkedList, parseLinkedList } from '~/libs/linked_list';
import { name } from './utils';

describe('Reverse Linked List', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [1, 2, 3, 4, 5],
      output: [5, 4, 3, 2, 1],
    },
    {
      input: [1, 2],
      output: [2, 1],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const head = createLinkedList(example.input);
      const output = reverseList(head);
      expect(parseLinkedList(output)).toEqual(example.output);
    })
  }
});
