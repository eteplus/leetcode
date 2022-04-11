import { lengthOfLastWord } from '~/problems/s58_length_of_last_word';
import { name } from './utils';

describe('Length of Last Word', () => {
  const examples: Array<{
    input: string;
    output: number;
  }> = [
    {
      input: 'Hello World',
      output: 5,
    },
    {
      input: '   fly me   to   the moon  ',
      output: 4,
    },
    {
      input: 'luffy is still joyboy',
      output: 6,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(lengthOfLastWord(example.input)).toEqual(example.output);
    });
  }
});
