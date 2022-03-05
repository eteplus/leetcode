import { isValid } from '~/problems/s20_valid_parentheses';
import { name } from './utils';

describe('Valid Parentheses', () => {
  const examples: Array<{
    input: string;
    output: boolean;
  }> = [
    {
      input: '()',
      output: true,
    },
    {
      input: '()[]{}',
      output: true,
    },
    {
      input: '(]',
      output: false,
    },
    {
      input: '([)]',
      output: false,
    },
    {
      input: '{{}[][[[]]]}',
      output: true,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(isValid(example.input)).toEqual(example.output);
    });
  }
});
