import { isAnagram } from '~/problems/s242_valid_anagram';
import { name } from './utils';

describe('Valid Anagram', () => {
  const examples: Array<{
    input: [string, string];
    output: boolean;
  }> = [
    {
      input: ['anagram', 'nagaram'],
      output: true,
    },
    {
      input: ['rat', 'car'],
      output: false,
    },
    {
      input: ['aa', 'bb'],
      output: false
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(isAnagram(...example.input)).toEqual(example.output);
    });
  }
});
