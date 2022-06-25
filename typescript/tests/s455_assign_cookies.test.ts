import { findContentChildren } from '~/problems/s455_assign_cookies';
import { name } from './utils';

describe('Assign Cookies', () => {
  const examples: Array<{
    input: [number[], number[]];
    output: number;
  }> = [
    {
      input: [
        [1, 2, 3],
        [1, 1],
      ],
      output: 1,
    },
    {
      input: [
        [1, 2],
        [1, 2, 3],
      ],
      output: 2,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(findContentChildren(...example.input)).toEqual(example.output);
    });
  }
});
