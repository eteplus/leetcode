import { uniquePaths } from '~/problems/s62_unique_paths';
import { name } from './utils';

describe('Unique Paths', () => {
  const examples: Array<{
    input: [number, number];
    output: number;
  }> = [
    {
      input: [3, 2],
      output: 3,
    },
    {
      input: [3, 7],
      output: 28,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(uniquePaths(...example.input)).toEqual(example.output);
    })
  }
});
