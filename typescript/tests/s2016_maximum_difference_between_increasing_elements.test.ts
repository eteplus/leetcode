import { maximumDifference } from '~/problems/s2016_maximum_difference_between_increasing_elements';
import { name } from './utils';

describe('Maximum Difference Between Increasing Elements', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [7, 1, 5, 4],
      output: 4,
    },
    {
      input: [9, 4, 3, 2],
      output: -1,
    },
    {
      input: [1, 5, 2, 10],
      output: 9,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(maximumDifference(example.input)).toEqual(example.output);
    });
  }
});
