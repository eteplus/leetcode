import { canBeIncreasing } from '~/problems/s1909_remove_one_element_to_make_the_array_strictly_increasing';
import { name } from './utils';

describe('Remove One Element to Make the Array Strictly Increasing', () => {
  const examples: Array<{
    input: number[];
    output: boolean;
  }> = [
    {
      input: [1, 2, 10, 5, 7],
      output: true,
    },
    {
      input: [2, 3, 1, 2],
      output: false,
    },
    {
      input: [1, 1, 1],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(canBeIncreasing(example.input)).toEqual(example.output);
    });
  }
});
