import { longestCommonPrefix } from '~/problems/s14_longest_common_prefix';
import { name } from './utils';

describe('Longest Common Prefix', () => {
  const examples: Array<{
    input: string[];
    output: string;
  }> = [
    {
      input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      output: '',
    },
    {
      input: [''],
      output: '',
    },
    {
      input: ['a'],
      output: 'a',
    },
    {
      input: ['dog', 'racecar', 'car'],
      output: '',
    },
    {
      input: ['flower', 'flow', 'flight'],
      output: 'fl',
    },
    {
      input: ['ab', 'a'],
      output: 'a',
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(longestCommonPrefix(example.input)).toEqual(example.output);
    });
  }
});
