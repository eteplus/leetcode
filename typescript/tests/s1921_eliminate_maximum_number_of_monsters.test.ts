import { eliminateMaximum } from '~/problems/s1921_eliminate_maximum_number_of_monsters';
import { name } from './utils';

describe('Eliminate Maximum Number of Monsters', () => {
  const examples: Array<{
    input: [number[], number[]];
    output: number;
  }> = [
    {
      input: [
        [3, 5, 7, 4, 5],
        [2, 3, 6, 3, 2],
      ],
      output: 2,
    },
    {
      input: [
        [1, 3, 4],
        [1, 1, 1],
      ],
      output: 3,
    },
    {
      input: [
        [1, 1, 2, 3],
        [1, 1, 1, 1],
      ],
      output: 1
    },
    {
      input: [
        [3, 2, 4],
        [5, 3, 2],
      ],
      output: 1
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(eliminateMaximum(...example.input)).toEqual(example.output);
    });
  }
});
