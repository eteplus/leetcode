import { removeDuplicates } from '~/problems/s26_remove_duplicates_from_sorted_array';
import { name } from './utils';

describe('Remove Duplicates from Sorted Array', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [2, 3, 3],
      output: 2,
    },
    {
      input: [1, 1, 1, 2, 2, 2, 2],
      output: 2,
    },
    {
      input: [1, 1, 2],
      output: 2,
    },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      output: 5,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(removeDuplicates(example.input)).toEqual(example.output);
    });
  }
});
