import { construct2DArray } from '~/problems/s2022_convert_1d_array_into_2d_array';
import { name } from './utils';

describe('Convert 1D Array Into 2D Array', () => {
  const examples: Array<{
    input: [number[], number, number];
    output: number[][];
  }> = [
    {
      input: [[1, 2, 3, 4], 2, 2],
      output: [
        [1, 2],
        [3, 4],
      ],
    },
    {
      input: [[1, 2, 3], 1, 3],
      output: [[1, 2, 3]],
    },
    {
      input: [[1, 2], 1, 1],
      output: [],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const [original, m, n] = example.input;
      expect(construct2DArray(original, m, n)).toEqual(example.output);
    });
  }
});
