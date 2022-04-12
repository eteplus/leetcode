import { plusOne } from '~/problems/s66_plus_one';
import { name } from './utils';

describe('Plus One', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [1, 2, 3],
      output: [1, 2, 4],
    },
    {
      input: [4, 3, 2, 1],
      output: [4, 3, 2, 2],
    },
    {
      input: [9],
      output: [1, 0],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(plusOne(example.input)).toEqual(example.output);
    });
  }
});
