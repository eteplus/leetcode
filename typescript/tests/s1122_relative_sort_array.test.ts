import { relativeSortArray } from '~/problems/s1122_relative_sort_array';
import { name } from './utils';

describe('Relative Sort Array', () => {
  const examples: Array<{
    input: [number[], number[]];
    output: number[];
  }> = [
    {
      input: [
        [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
        [2, 1, 4, 3, 9, 6],
      ],
      output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
    },
    {
      input: [
        [28, 6, 22, 8, 44, 17],
        [22, 28, 8, 6],
      ],
      output: [22, 28, 8, 6, 17, 44],
    },
    {
      input: [
        [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31],
        [2, 42, 38, 0, 43, 21],
      ],
      output: [2, 42, 38, 0, 43, 21, 5, 7, 12, 12, 13, 23, 24, 24, 27, 29, 30, 31, 33, 48],
    },
    {
      input: [
        [1, 2, 3, 4, 5],
        [2, 4],
      ],
      output: [2, 4, 1, 3, 5],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(relativeSortArray(...example.input)).toEqual(example.output);
    });
  }
});
