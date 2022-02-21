import { getSum } from '~/problems/s371_sum_of_two_integers';
import { name } from './utils';

describe('Sum of Two Integers', () => {
  const examples: Array<{
    input: [number, number],
    output: number
  }> = [
    {
      input: [-2, -8],
      output: -10,
    },
    {
      input: [6, 3],
      output: 9,
    },
    {
      input: [2, 3],
      output: 5,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const output = getSum(example.input[0], example.input[1]);
      expect(output).toEqual(example.output);
    })
  }
})