import { countSubstrings } from '~/problems/s647_palindromic_substrings';
import { name } from './utils';

describe('Palindromic Substrings', () => {
  const examples: Array<{
    input: string;
    output: number;
  }> = [
    {
      input: 'babad',
      output: 7
    },
    {
      input: 'babbad',
      output: 9,
    },
    {
      input: 'cbbd',
      output: 5,
    },
    {
      input: 'abc',
      output: 3
    },
    {
      input: 'aaa',
      output: 6
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(countSubstrings(example.input)).toEqual(example.output);
    });
  }
});