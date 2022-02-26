import { climbStairs } from '~/problems/s70_climbing_stairs';
import { name } from './utils';

describe('Climbing Stairs', () => {
  const examples: Array<{
    input: number;
    output: number;
  }> = [
    {
      input: 1,
      output: 1,
    },
    {
      input: 2,
      output: 2,
    },
    {
      input: 3,
      output: 3,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(climbStairs(example.input)).toEqual(example.output);
    })
  }
});
