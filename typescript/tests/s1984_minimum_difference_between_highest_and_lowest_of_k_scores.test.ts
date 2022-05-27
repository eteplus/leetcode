import { minimumDifference } from '~/problems/s1984_minimum_difference_between_highest_and_lowest_of_k_scores';
import { name } from './utils';

describe('Minimum Difference Between Highest and Lowest of K Scores', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[90], 1],
      output: 0,
    },
    {
      input: [[9, 4, 1, 7], 2],
      output: 2,
    },
    {
      input: [[9, 4, 1, 7], 4],
      output: 8,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(minimumDifference(...example.input)).toEqual(example.output);
    });
  }
});
