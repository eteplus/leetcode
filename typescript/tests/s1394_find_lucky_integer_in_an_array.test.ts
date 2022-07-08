import { findLucky } from '~/problems/s1394_find_lucky_integer_in_an_array';
import { name } from './utils';

describe('Find Lucky Integer in an Array', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [2, 2, 3, 4],
      output: 2,
    },
    {
      input: [1, 2, 2, 3, 3, 3],
      output: 3,
    },
    {
      input: [2, 2, 2, 3, 3],
      output: -1,
    },
    {
      input: [
        3, 19, 18, 2, 9, 4, 7, 11, 15, 7, 14, 10, 11, 9, 8, 5, 4, 14, 11, 4, 16, 3, 13, 14, 14, 15, 8, 19, 3, 5, 20, 15,
        14, 10, 16, 11, 17, 20, 11, 20, 15, 3, 20, 5, 12, 2, 15, 12, 14, 16, 20, 17, 15, 8, 18, 9, 8, 5, 12, 3, 5, 15,
        14, 10, 2, 20, 20, 3, 13, 9, 1, 3, 16, 18, 14, 16, 13, 9, 18, 13, 9, 3, 5, 19,
      ],
      output: 1,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(findLucky(example.input)).toEqual(example.output);
    });
  }
});
