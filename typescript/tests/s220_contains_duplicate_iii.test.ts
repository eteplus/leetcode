import { containsNearbyAlmostDuplicate } from '~/problems/s220_contains_duplicate_iii';
import { name } from './utils';

describe('Contains Duplicate III', () => {
  const examples: Array<{
    input: [number[], number, number];
    output: boolean;
  }> = [
    {
      input: [[1, 2, 3, 1], 3, 0],
      output: true,
    },
    {
      input: [[1, 0, 1, 1], 1, 2],
      output: true,
    },
    {
      input: [[1, 5, 9, 1, 5, 9], 2, 3],
      output: false,
    },
    {
      input: [[8, 7, 15, 1, 6, 1, 9, 15], 1, 3],
      output: true,
    },
    {
      input: [[2147483640, 2147483641], 1, 100],
      output: true,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [nums, k, t] = example.input;
      expect(containsNearbyAlmostDuplicate(nums, k, t)).toEqual(example.output);
    });
  }
});
