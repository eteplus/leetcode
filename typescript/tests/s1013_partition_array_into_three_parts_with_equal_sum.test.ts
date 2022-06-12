import { canThreePartsEqualSum } from '~/problems/s1013_partition_array_into_three_parts_with_equal_sum';
import { name } from './utils';

describe('Partition Array Into Three Parts With Equal Sum', () => {
  const examples: Array<{
    input: number[];
    output: boolean;
  }> = [
    {
      input: [0,2,1,-6,6,-7,9,1,2,0,1],
      output: true,
    },
    {
      input: [0,2,1,-6,6,7,9,-1,2,0,1],
      output: false,
    },
    {
      input:[3,3,6,5,-2,2,5,1,-9,4],
      output: true,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(canThreePartsEqualSum(example.input)).toEqual(example.output);
    });
  }
});
