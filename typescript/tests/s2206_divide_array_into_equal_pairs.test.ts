import { divideArray } from '~/problems/s2206_divide_array_into_equal_pairs';
import { name } from './utils';

describe('Remove One Element to Make the Array Strictly Increasing', () => {
  const examples: Array<{
    input: number[];
    output: boolean;
  }> = [
    {
      input: [3, 2, 3, 2, 2, 2],
      output: true,
    },
    {
      input: [1, 2, 3, 4],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(divideArray(example.input)).toEqual(example.output);
    });
  }
});
