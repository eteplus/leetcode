import { frequencySort } from '~/problems/s1636_sort_array_by_increasing_frequency';
import { name } from './utils';

describe('Sort Array by Increasing Frequency', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [1, 1, 2, 2, 2, 3],
      output: [3, 1, 1, 2, 2, 2],
    },
    {
      input: [2, 3, 1, 3, 2],
      output: [1, 3, 3, 2, 2],
    },
    {
      input: [-1, 1, -6, 4, 5, -6, 1, 4, 1],
      output: [5, -1, 4, 4, -6, -6, 1, 1, 1],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(frequencySort(example.input)).toEqual(example.output);
    });
  }
});
