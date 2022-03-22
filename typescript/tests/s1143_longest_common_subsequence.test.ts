import { longestCommonSubsequence } from '~/problems/s1143_longest_common_subsequence';
import { name } from './utils';

describe('Longest Common Subsequence', () => {
  const examples: Array<{
    input: [string, string];
    output: number;
  }> = [
    {
      input: ['abcde', 'ace'],
      output: 3,
    },
    {
      input: ['abc', 'abc'],
      output: 3,
    },
    {
      input: ['abc', 'def'],
      output: 0,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(longestCommonSubsequence(...example.input)).toEqual(example.output);
    });
  }
});
