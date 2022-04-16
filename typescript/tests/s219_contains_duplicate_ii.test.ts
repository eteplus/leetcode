import { containsNearbyDuplicate } from '~/problems/s219_contains_duplicate_ii';
import { name } from './utils';

describe('Contains Duplicate II', () => {
  const examples: Array<{
    input: [number[], number];
    output: boolean;
  }> = [
    {
      input: [[1, 2, 3, 1], 3],
      output: true,
    },
    {
      input: [[1, 0, 1, 1], 1],
      output: true,
    },
    {
      input: [[1, 2, 3, 1, 2, 3], 2],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(containsNearbyDuplicate(...example.input)).toEqual(example.output);
    });
  }
});
