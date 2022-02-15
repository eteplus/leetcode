import { reverseBetween } from '~/problems/s92_reverse_linked_list_ii';
import { createLinkedList, parseLinkedList } from '~/libs/linked_list';
import { name } from './utils';

describe('Reverse Linked List II', () => {
  const examples: Array<{
    input: [number[], number, number];
    output: number[];
  }> = [
    {
      input: [[1, 2, 3, 4, 5], 2, 4],
      output: [1, 4, 3, 2, 5],
    },
    {
      input: [[1, 2, 3, 4, 5], 2, 5],
      output: [1, 5, 4, 3, 2],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const head = createLinkedList(example.input[0]);
      const output = reverseBetween(head, example.input[1], example.input[2]);
      expect(parseLinkedList(output)).toEqual(example.output);
    })
  }
});
