import { maxAscendingSum } from '~/problems/s1800_maximum_ascending_subarray_sum';
import { name } from './utils';

describe('Maximum Ascending Subarray Sum', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [10, 20, 30, 5, 10, 50],
      output: 65,
    },
    {
      input: [10, 20, 30, 40, 50],
      output: 150,
    },
    {
      input: [12, 17, 15, 13, 10, 11, 12],
      output: 33,
    },
    {
      input: [3, 6, 10, 1, 8, 9, 9, 8, 9],
      output: 19,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(maxAscendingSum(example.input)).toEqual(example.output);
    })
  }
});
