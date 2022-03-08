import { isPalindrome } from '~/problems/s125_valid_palindrome';
import { name } from './utils';

describe('Valid Palindrome', () => {
  const examples: Array<{
    input: string;
    output: boolean;
  }> = [
    {
      input: "A man, a plan, a canal: Panama",
      output: true,
    },
    {
      input: "121",
      output: true,
    },
    {
      input: "race a car",
      output: false,
    },
    {
      input: " ",
      output: true
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(isPalindrome(example.input)).toEqual(example.output);
    });
  }
});
