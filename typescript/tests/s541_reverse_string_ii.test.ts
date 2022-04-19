import { reverseStr } from '~/problems/s541_reverse_string_ii';
import { name } from './utils';

describe('Reverse String II', () => {
  const examples: Array<{
    input: [string, number];
    output: string;
  }> = [
    {
      input: ['abcdefg', 2],
      output: 'bacdfeg',
    },
    {
      input: ['abcd', 2],
      output: 'bacd',
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(reverseStr(...example.input)).toEqual(example.output);
    });
  }
});
