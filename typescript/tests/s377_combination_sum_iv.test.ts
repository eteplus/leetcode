import { combinationSum4 } from '~/problems/s377_combination_sum_iv';
import { name } from './utils';

describe('Combination Sum IV', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[1, 2, 3], 4],
      output: 7,
    },
    {
      input: [[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 10],
      output: 9,
    },
    {
      input: [[9], 3],
      output: 0,
    },
    {
      input: [[1, 2, 3], 6],
      output: 24,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [nums, target] = example.input;
      expect(combinationSum4(nums, target)).toEqual(example.output);
    });
  }
});
