import { containsDuplicate } from '~/problems/s217_contains_duplicate';
import { name } from './utils';

describe('Contains Duplicate', () => {
  const examples: Array<{
    input: number[];
    output: boolean;
  }> = [
    {
      input: [1, 2, 3, 1],
      output: true,
    },
    {
      input: [1, 1, 2],
      output: true,
    },
    {
      input: [1, 2, 3, 4],
      output: false,
    },
    {
      input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      output: true,
    },
  ];
  for (let example of examples) {
    let output = containsDuplicate(example.input);
    test(name(example), () => {
      expect(output).toEqual(example.output);
    })
  }
});
