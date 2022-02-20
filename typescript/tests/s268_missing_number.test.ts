import { missingNumber } from '~/problems/s268_missing_number';
import { name } from './utils';

describe('Missing Number', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [3, 0, 1],
      output: 2,
    },
    {
      input: [0, 1],
      output: 2,
    },
    {
      input: [9, 6, 4, 2, 3, 5, 7, 0, 1],
      output: 8,
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      let output = missingNumber(example.input);
      expect(output).toEqual(example.output);
    });
  }
});
