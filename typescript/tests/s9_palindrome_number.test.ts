import { isPalindrome } from '~/problems/s9_palindrome_number';
import { name } from './utils';

describe('Palindrome Number', () => {
  const examples: Array<{
    input: number;
    output: boolean;
  }> = [
    {
      input: 121,
      output: true,
    },
    {
      input: -121,
      output: false,
    },
    {
      input: 10,
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(isPalindrome(example.input)).toEqual(example.output);
    });
  }
});
