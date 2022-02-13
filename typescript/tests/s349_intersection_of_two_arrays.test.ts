import { intersection } from '~/problems/s349_intersection_of_two_arrays';
import { name } from './utils';

describe('Intersection of Two Arrays', () => {
  const examples: Array<{
    input: number[][];
    output: number[];
  }> = [
    {
      input: [
        [1, 2, 2, 1],
        [2, 2],
      ],
      output: [2],
    },
    {
      input: [
        [4, 9, 5],
        [9, 4, 9, 8, 4],
      ],
      output: [4, 9],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const output = intersection(example.input[0], example.input[1]);
      expect(output.sort()).toEqual(example.output.sort());
    });
  }
});
