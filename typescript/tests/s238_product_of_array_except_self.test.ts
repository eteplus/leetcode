import { productExceptSelf } from '~/problems/s238_product_of_array_except_self';
import { name } from './utils';

describe('Product of Array Except Self', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [1, 2, 3, 4],
      output: [24, 12, 8, 6],
    },
    {
      input: [-1, 1, 0, -3, 3],
      output: [-0, 0, 9, -0, 0],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const output = productExceptSelf(example.input);
      expect(output).toEqual(example.output);
    });
  }
});
