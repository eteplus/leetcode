import { singleNumber } from '~/problems/s136_single_number';
import { name } from './utils';

describe('Single Number', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [2, 2, 1],
      output: 1,
    },
    {
      input: [4, 1, 2, 1, 2],
      output: 4,
    },
    {
      input: [1],
      output: 1,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(singleNumber(example.input)).toEqual(example.output);
    });
  }
});
