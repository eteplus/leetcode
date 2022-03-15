import { rob } from '~/problems/s198_house_robber';
import { name } from './utils';

describe('House Robber', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [2, 3, 1, 1, 4],
      output: 7,
    },
    {
      input: [2, 3, 1, 1, 4, 2, 5],
      output: 12,
    },
    {
      input: [2, 3, 2],
      output: 4,
    },
    {
      input: [2, 1, 1, 2],
      output: 4,
    },
    {
      input: [1, 2, 3, 1],
      output: 4,
    },
    {
      input: [1, 2, 3],
      output: 4,
    },
    {
      input: [200, 3, 140, 20, 10],
      output: 350,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(rob(example.input)).toEqual(example.output);
    });
  }
});
