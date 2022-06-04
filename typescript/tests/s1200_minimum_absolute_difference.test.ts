import { minimumAbsDifference } from '~/problems/s1200_minimum_absolute_difference';
import { name } from './utils';

describe('Minimum Absolute Difference', () => {
  const examples: Array<{
    input: number[];
    output: number[][];
  }> = [
    {
      input: [4, 2, 1, 3],
      output: [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    {
      input: [1, 3, 6, 10, 15],
      output: [[1, 3]],
    },
    {
      input: [3, 8, -10, 23, 19, -4, -14, 27],
      output: [
        [-14, -10],
        [19, 23],
        [23, 27],
      ],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(minimumAbsDifference(example.input)).toEqual(example.output);
    });
  }
});
