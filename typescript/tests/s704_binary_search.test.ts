import { search } from '~/problems/s704_binary_search';
import { name } from './utils';

describe('Binary Search', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[-1, 0, 3, 5, 9, 12], 9],
      output: 4,
    },
    {
      input: [[-1, 0, 3, 5, 9, 12], 2],
      output: -1,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [nums, target] = example.input;
      expect(search(nums, target)).toEqual(example.output);
    });
  }
});
