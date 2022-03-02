import { lengthOfLIS } from '~/problems/s300_longest_increasing_subsequence';
import { name } from './utils';

describe('Longest Increasing Subsequence', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [2, 3, -2, 4],
      output: 3,
    },
    {
      input: [7, 7, 7, 7, 7, 7, 7],
      output: 1,
    },
    {
      input: [10, 9, 2, 5, 3, 7, 101, 18],
      output: 4,
    },
    {
      input: [0, 1, 0, 3, 2, 3],
      output: 4,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(lengthOfLIS(example.input)).toEqual(example.output);
    });
  }
});
