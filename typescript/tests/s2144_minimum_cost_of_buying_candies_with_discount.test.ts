import { minimumCost } from '~/problems/s2144_minimum_cost_of_buying_candies_with_discount';
import { name } from './utils';

describe('Minimum Cost of Buying Candies With Discount', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [1, 2, 3],
      output: 5,
    },
    {
      input: [1, 2, 3, 4],
      output: 8,
    },
    {
      input: [6,5,7,9,2,2],
      output: 23,
    },
    {
      input: [5, 5],
      output: 10,
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(minimumCost(example.input)).toEqual(example.output);
    })
  }
});
