import { majorityElement } from '~/problems/s169_majority_element';
import { name } from './utils';

describe('Majority Element', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [3, 2, 3],
      output: 3,
    },
    {
      input: [2, 2, 1, 1, 1, 2, 2],
      output: 2,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(majorityElement(example.input)).toEqual(example.output);
    });
  }
});
