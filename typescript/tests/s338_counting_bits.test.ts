import { countBits } from '~/problems/s338_counting_bits';
import { name } from './utils';

describe('Counting Bits', () => {
  const examples: Array<{
    input: number;
    output: number[];
  }> = [
    {
      input: 6,
      output: [0, 1, 1, 2, 1, 2, 2],
    },
    {
      input: 5,
      output: [0, 1, 1, 2, 1, 2],
    },
    {
      input: 2,
      output: [0, 1, 1],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(countBits(example.input)).toEqual(example.output);
    });
  }
});
