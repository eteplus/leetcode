import { intersect } from '~/problems/s350_intersection_of_two_arrays_ii';
import { name } from './utils';

describe('Intersection of Two Arrays II', () => {
  const examples: Array<{
    input: number[][];
    output: number[];
  }> = [
    {
      input: [
        [1, 2, 2, 1],
        [2, 2],
      ],
      output: [2, 2],
    },
    {
      input: [
        [4, 9, 5],
        [9, 4, 9, 8, 4],
      ],
      output: [4, 9],
    },
    {
      input: [
        [3, 1, 2],
        [1, 1],
      ],
      output: [1],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const output = intersect(example.input[0], example.input[1]);
      expect(output.sort()).toEqual(example.output.sort());
    });
  }
});
