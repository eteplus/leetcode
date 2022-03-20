import { maxArea } from '~/problems/s11_container_with_most_water';
import { name } from './utils';

describe('Container With Most Water', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      output: 49,
    },
    {
      input: [1, 1],
      output: 1,
    },
    {
      input: [5, 4, 1, 7, 8],
      output: 20,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(maxArea(example.input)).toEqual(example.output);
    });
  }
});
