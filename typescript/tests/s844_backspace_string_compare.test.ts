import { backspaceCompare } from '~/problems/s844_backspace_string_compare';
import { name } from './utils';

describe('Backspace String Compare', () => {
  const examples: Array<{
    input: [string, string];
    output: boolean;
  }> = [
    {
      input: ['ab#c', 'ad#c'],
      output: true,
    },
    {
      input: ['ab##', 'c#d#'],
      output: true,
    },
    {
      input: ['a#c', 'b'],
      output: false,
    },
    {
      input: ['xywrrmp', 'xywrrmu#p'],
      output: true,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(backspaceCompare(...example.input)).toEqual(example.output);
    });
  }
});
