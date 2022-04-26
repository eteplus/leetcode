import { deleteDuplicates } from '~/problems/s83_remove_duplicates_from_sorted_list';
import { createLinkedList } from '~/libs/linked_list';
import { name } from './utils';

describe('Remove Duplicates from Sorted List', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [1, 1, 2],
      output: [1, 2],
    },
    {
      input: [1, 1, 2, 3, 3],
      output: [1, 2, 3],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const head = createLinkedList(example.input);
      const output = deleteDuplicates(head);
      expect(output).toEqual(createLinkedList(example.output));
    });
  }
});
