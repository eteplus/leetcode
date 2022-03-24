import { longestPalindrome } from '~/problems/s5_longest_palindromic_substring';
import { name } from './utils';

describe('Longest Palindromic Substring', () => {
  const examples: Array<{
    input: string;
    output: string;
  }> = [
    {
      input: 'babad',
      output: 'bab',
    },
    {
      input: 'babbad',
      output: 'abba',
    },
    {
      input: 'cbbd',
      output: 'bb',
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(longestPalindrome(example.input)).toEqual(example.output);
    });
  }
});
