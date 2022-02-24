import { reorderList } from '~/problems/s143_reorder_list';
import { createLinkedList, parseLinkedList } from '~/libs/linked_list';
import { name } from './utils';

describe('Reorder List', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [1, 2, 3, 4, 5],
      output: [1, 5, 2, 4, 3],
    },
    {
      input: [1, 2, 3, 4],
      output: [1, 4, 2, 3],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const head = createLinkedList(example.input);
      reorderList(head);
      expect(parseLinkedList(head)).toEqual(example.output);
    });
  }
});
