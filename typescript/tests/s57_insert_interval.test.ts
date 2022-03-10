import { insert } from '~/problems/s57_insert_interval';
import { name } from './utils';

describe('Insert Interval', () => {
  const examples: Array<{
    input: [number[][], number[]];
    output: number[][];
  }> = [
    {
      input: [
        [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ],
        [2, 5],
      ],
      output: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },
    {
      input: [
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5],
      ],
      output: [
        [1, 5],
        [6, 9],
      ],
    },
    {
      input: [
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8],
      ],
      output: [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    },
    {
      input: [[], [5, 7]],
      output: [[5, 7]],
    },
    {
      input: [[[1, 6]], [5, 7]],
      output: [[1, 7]],
    },
    {
      input: [[[1, 2]], [5, 7]],
      output: [[1, 2], [5, 7]],
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(insert(...example.input)).toEqual(example.output);
    });
  }
});
