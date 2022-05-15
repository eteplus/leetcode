import { peakIndexInMountainArray } from '~/problems/s852_peak_index_in_a_mountain_array';
import { name } from './utils';

describe('Peak Index in a Mountain Array', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [0, 1, 0],
      output: 1,
    },
    {
      input: [0, 2, 1, 0],
      output: 1,
    },
    {
      input: [0, 10, 5, 2],
      output: 1,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(peakIndexInMountainArray(example.input)).toEqual(example.output);
    })
  }
});
