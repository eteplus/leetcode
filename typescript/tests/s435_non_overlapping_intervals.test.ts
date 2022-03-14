import { eraseOverlapIntervals } from '~/problems/s435_non_overlapping_intervals';
import { name } from './utils';

describe('Non-overlapping Intervals', () => {
  const examples: Array<{
    input: number[][];
    output: number;
  }> = [
    {
      input: [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ],
      output: 1,
    },
    {
      input: [
        [1, 3],
        [2, 6],
        [6, 8],
        [8, 10],
        [15, 18],
      ],
      output: 1,
    },
    {
      input: [
        [1, 2],
        [1, 2],
        [1, 2],
      ],
      output: 2,
    },
    {
      input: [
        [1, 2],
        [2, 3],
      ],
      output: 0,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(eraseOverlapIntervals(example.input)).toEqual(example.output);
    });
  }
});
