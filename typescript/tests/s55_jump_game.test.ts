import { canJump } from '~/problems/s55_jump_game';
import { name } from './utils';

describe('Jump Game', () => {
  const examples: Array<{
    input: number[];
    output: boolean;
  }> = [
    {
      input: [2, 3, 1, 1, 4],
      output: true,
    },
    {
      input: [1],
      output: true,
    },
    {
      input: [3, 2, 1, 0, 4],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(canJump(example.input)).toEqual(example.output);
    })
  }
});
