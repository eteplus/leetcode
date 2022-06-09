import { majorityElement } from '~/problems/s229_majority_element_ii';
import { name } from './utils';

describe('Majority Element II', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [3, 2, 3],
      output: [3],
    },
    {
      input: [1],
      output: [1],
    },
    {
      input: [1, 2],
      output: [1, 2],
    },
    {
      input: [2, 2],
      output: [2],
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(majorityElement(example.input)).toEqual(example.output);
    });
  }
});
