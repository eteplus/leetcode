import { reverseWords } from '~/problems/s557_reverse_words_in_a_string_iii';
import { name } from './utils';

describe('Reverse Words in a String III', () => {
  const examples: Array<{
    input: string;
    output: string;
  }> = [
    {
      input: 'Let\'s take LeetCode contest',
      output: 's\'teL ekat edoCteeL tsetnoc',
    },
    {
      input: 'God Ding',
      output: 'doG gniD',
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(reverseWords(example.input)).toEqual(example.output);
    });
  }
});
