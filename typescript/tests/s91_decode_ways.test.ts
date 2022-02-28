import { numDecodings } from '~/problems/s91_decode_ways';
import { name } from './utils';

describe('Decode Ways', () => {
  const examples: Array<{
    input: string;
    output: number;
  }> = [
    {
      input: '11106',
      output: 2,
    },
    {
      input: '1123',
      output: 5,
    },
    {
      input: '1011',
      output: 2,
    },
    {
      input: '12',
      output: 2,
    },
    {
      input: '10',
      output: 1,
    },
    {
      input: '2233',
      output: 3,
    },
    {
      input: '226',
      output: 3,
    },
    {
      input: '06',
      output: 0,
    },
    {
      input: '60',
      output: 0,
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(numDecodings(example.input)).toEqual(example.output);
    });
  }
});
