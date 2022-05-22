import { arrayPairSum } from '~/problems/s561_array_partition_i';
import { name } from './utils';

describe('Array Partition I', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [1, 4, 3, 2],
      output: 4,
    },
    {
      input: [6, 2, 6, 5, 1, 2],
      output: 9,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(arrayPairSum(example.input)).toEqual(example.output);
    })
  }
});
