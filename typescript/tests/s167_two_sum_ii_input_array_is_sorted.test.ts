import { twoSum } from '~/problems/s167_two_sum_ii_input_array_is_sorted';
import { name } from './utils';

describe('Two Sum II - Input Array Is Sorted', () => {
  const examples: Array<{
    input: [number[], number];
    output: number[];
  }> = [
    {
      input: [[2, 7, 11, 15], 9],
      output: [1, 2],
    },
    {
      input: [[2, 3, 4], 6],
      output: [1, 3],
    },
    {
      input: [[-1, 0], -1],
      output: [1, 2],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(twoSum(...example.input)).toEqual(example.output);
    });
  }
});
