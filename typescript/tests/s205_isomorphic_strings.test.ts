import { isIsomorphic } from '~/problems/s205_isomorphic_strings';
import { name } from './utils';

describe('Isomorphic Strings', () => {
  const examples: Array<{
    input: [string, string];
    output: boolean;
  }> = [
    {
      input: ['egg', 'add'],
      output: true,
    },
    {
      input: ['foo', 'bar'],
      output: false,
    },
    {
      input: ['paper', 'title'],
      output: true
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(isIsomorphic(...example.input)).toEqual(example.output);
    });
  }
});
