import { merge } from '~/problems/s88_merge_sorted_array';
import { name } from './utils';

describe('Merge Sorted Array', () => {
  const examples: Array<{
    input: [number[], number, number[], number];
    output: number[];
  }> = [
    {
      input: [[1, 2, 4, 5, 6, 0], 5, [3], 1],
      output: [1, 2, 3, 4, 5, 6],
    },
    {
      input: [[4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5],
      output: [1, 2, 3, 4, 5, 6],
    },
    {
      input: [[4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3],
      output: [1, 2, 3, 4, 5, 6],
    },
    {
      input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
      output: [1, 2, 2, 3, 5, 6],
    },
    {
      input: [[1], 1, [], 0],
      output: [1],
    },
    {
      input: [[0], 0, [1], 1],
      output: [1],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const [nums1, m, nums2, n] = example.input;
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual(example.output);
    });
  }
});
