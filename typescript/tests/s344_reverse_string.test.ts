import { reverseString } from '~/problems/s344_reverse_string';
import { name } from './utils';

describe('', () => {
  const examples: Array<{
    input: string[];
    output: string[];
  }> = [
    {
      input: ['h', 'e', 'l', 'l', 'o'],
      output: ['o', 'l', 'l', 'e', 'h'],
    },
    {
      input: ['H', 'a', 'n', 'n', 'a', 'h'],
      output: ['h', 'a', 'n', 'n', 'a', 'H'],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      reverseString(example.input);
      expect(example.input).toEqual(example.output);
    });
  }
});
