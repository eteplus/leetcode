import { reverseBits } from '~/problems/s190_reverse_bits'
import { name } from './utils';

describe('Reverse Bits', () => {
  const examples: Array<{
    input: string;
    output: number;
  }> = [
    {
      input: '00000010100101000001111010011100',
      output: 964176192,
    },
    {
      input: '00000000000000000000000010000000',
      output: 16777216,
    },
    {
      input: '11111111111111111111111111111101',
      output: 3221225471,
    },
    {
      input: '00000000000000000000000000001011',
      output: 3489660928,
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(reverseBits(parseInt(example.input, 2))).toEqual(example.output);
    });
  }
});
