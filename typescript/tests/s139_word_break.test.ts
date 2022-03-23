import { wordBreak } from '~/problems/s139_word_break';
import { name } from './utils';

describe('Word Break', () => {
  const examples: Array<{
    input: [string, string[]];
    output: boolean;
  }> = [
    {
      input: ['leetcode', ['leet', 'code']],
      output: true,
    },
    {
      input: ['applepenapple', ['apple', 'pen']],
      output: true,
    },
    {
      input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
      output: false,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(wordBreak(...example.input)).toEqual(example.output);
    });
  }
});
