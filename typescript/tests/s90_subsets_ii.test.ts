import { subsetsWithDup } from '~/problems/s90_subsets_ii';
import { name } from './utils';

describe('Subsets II', () => {
  const examples: Array<{
    input: number[];
    output: number[][];
  }> = [
    {
      input: [1, 2, 2],
      output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
    },
    {
      input: [1],
      output: [[], [1]],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(subsetsWithDup(example.input)).toEqual(example.output);
    });
  }
});
