import { maxProduct } from '~/problems/s152_maximum_product_subarray';
import { name } from './utils';

describe('Maximum Product Subarray', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [2, 3, -2, 4],
      output: 6,
    },
    {
      input: [-2, 0, -1],
      output: 0,
    },
    {
      input: [2, 3, -2, -3, -1, 4],
      output: 36,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(maxProduct(example.input)).toEqual(example.output);
    });
  }
});
