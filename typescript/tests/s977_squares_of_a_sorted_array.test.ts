import { sortedSquares } from '~/problems/s977_squares_of_a_sorted_array';
import { name } from './utils';

describe('Squares of a Sorted Array', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [-4, -1, 0, 3, 10],
      output: [0, 1, 9, 16, 100],
    },
    {
      input: [-7, -3, 2, 3, 11],
      output: [4, 9, 9, 49, 121],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(sortedSquares(example.input)).toEqual(example.output);
    });
  }
});
