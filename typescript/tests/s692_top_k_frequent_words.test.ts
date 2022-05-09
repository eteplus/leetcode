import { topKFrequent } from '~/problems/s692_top_k_frequent_words';
import { name } from './utils';

describe('Top K Frequent Words', () => {
  const examples: Array<{
    input: [string[], number];
    output: string[];
  }> = [
    {
      input: [['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2],
      output: ['i', 'love'],
    },
    {
      input: [['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4],
      output: ['the', 'is', 'sunny', 'day'],
    },
    {
      input: [['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3],
      output: ['i', 'love', 'coding'],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [words, k] = example.input;
      expect(topKFrequent(words, k)).toEqual(example.output);
    });
  }
});
