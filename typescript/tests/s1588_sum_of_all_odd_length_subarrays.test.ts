import { sumOddLengthSubarrays } from '~/problems/s1588_sum_of_all_odd_length_subarrays';
import { name } from './utils';

describe('Sum of All Odd Length Subarrays', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [1, 4, 2, 5, 3],
      output: 58,
    },
    {
      input: [1, 2],
      output: 3,
    },
    {
      input: [10, 11, 12],
      output: 66,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(sumOddLengthSubarrays(example.input)).toEqual(example.output);
    });
  }
});
