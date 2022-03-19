import { search } from '~/problems/s33_search_in_rotated_sorted_array';
import { name } from './utils';

describe('Search in Rotated Sorted Array', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[4, 5, 6, 7, 0, 1, 2], 0],
      output: 4,
    },
    {
      input: [[1], 0],
      output: -1,
    },
    {
      input: [[4, 5, 6, 7, 0, 1, 2], 3],
      output: -1,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [nums, target] = example.input;
      expect(search(nums, target)).toEqual(example.output);
    });
  }
});
