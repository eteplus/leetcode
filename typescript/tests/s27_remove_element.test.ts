import { removeElement } from '~/problems/s27_remove_element';
import { name } from './utils';

describe('Remove Element', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[2, 3, 3], 3],
      output: 1,
    },
    {
      input: [[1, 1, 1, 2, 2, 2, 2], 1],
      output: 4,
    },
    {
      input: [[1, 1, 2], 2],
      output: 2,
    },
    {
      input: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
      output: 5,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(removeElement(...example.input)).toEqual(example.output);
    });
  }
});
