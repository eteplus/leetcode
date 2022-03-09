import { findMin } from '~/problems/s153_find_minimum_in_rotated_sorted_array';
import { name } from './utils';

describe('Find Minimum in Rotated Sorted Array', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [
        266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33, 35, 37, 38, 39, 46, 49, 54, 65, 71,
        74, 77, 79, 82, 83, 88, 92, 93, 94, 97, 104, 108, 114, 115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142,
        144, 147, 150, 154, 160, 163, 166, 169, 172, 173, 177, 180, 183, 184, 188, 198, 203, 208, 210, 214, 218, 220,
        223, 224, 233, 236, 241, 243, 253, 256, 257, 262, 263,
      ],
      output: 6,
    },
    {
      input: [3, 4, 5, 1, 2],
      output: 1,
    },
    {
      input: [3, 1, 2],
      output: 1,
    },
    {
      input: [11, 13, 15, 17],
      output: 11,
    },
    {
      input: [4, 5, 6, 7, 8, 0, 1, 2],
      output: 0,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(findMin(example.input)).toEqual(example.output);
    });
  }
});
