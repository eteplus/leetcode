import { slowestKey } from '~/problems/s1629_slowest_key';
import { name } from './utils';

describe('Slowest Key', () => {
  const examples: Array<{
    input: [number[], string];
    output: string;
  }> = [
    {
      input: [[9, 29, 49, 50], 'cbcd'],
      output: 'c',
    },
    {
      input: [[12, 23, 36, 46, 62], 'spuda'],
      output: 'a',
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(slowestKey(...example.input)).toEqual(example.output);
    });
  }
});
