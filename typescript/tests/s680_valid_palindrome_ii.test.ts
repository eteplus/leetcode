import { validPalindrome } from '~/problems/s680_valid_palindrome_ii';
import { name } from './utils';

describe('Valid Palindrome II', () => {
  const examples: Array<{
    input: string;
    output: boolean;
  }> = [
    {
      input: "aba",
      output: true,
    },
    {
      input: "abca",
      output: true,
    },
    {
      input: "abc",
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(validPalindrome(example.input)).toEqual(example.output);
    });
  }
});
