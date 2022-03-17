import { hammingWeight } from '~/problems/s191_number_of_1_bits'
import { name } from './utils';

describe('Counting Bits', () => {
  const examples: Array<{
    input: string;
    output: number;
  }> = [
    {
      input: '1011',
      output: 3,
    },
    {
      input: '10000000',
      output: 1,
    },
    {
      input: '11111111111111111111111111111101',
      output: 31,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(hammingWeight(parseInt(example.input, 2))).toEqual(example.output);
    });
  }
});
