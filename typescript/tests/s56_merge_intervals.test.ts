import { merge } from '~/problems/s56_merge_intervals';
import { name } from './utils';

describe('Merge Intervals', () => {
  const examples: Array<{
    input: number[][];
    output: number[][];
  }> = [
    {
      input: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      output: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },
    {
      input: [
        [1, 3],
        [2, 6],
        [6, 8],
        [8, 10],
        [15, 18],
      ],
      output: [
        [1, 10],
        [15, 18],
      ],
    },
    {
      input: [
        [1, 3],
        [2, 6],
        [7, 10],
        [8, 10],
        [15, 20],
      ],
      output: [
        [1, 6],
        [7, 10],
        [15, 20],
      ],
    },
    {
      input: [
        [1, 4],
        [4, 5],
      ],
      output: [[1, 5]],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const output = merge(example.input);
      expect(output).toEqual(example.output);
    });
  }
});
