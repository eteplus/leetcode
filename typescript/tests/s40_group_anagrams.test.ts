import { groupAnagrams } from '~/problems/s40_group_anagrams';
import { name } from './utils';

describe('Group Anagrams', () => {
  const examples: Array<{
    input: string[];
    output: string[][];
  }> = [
    {
      input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
    },
    {
      input: [''],
      output: [['']],
    },
    {
      input: ['a'],
      output: [['a']],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(groupAnagrams(example.input)).toEqual(example.output);
    });
  }
});
