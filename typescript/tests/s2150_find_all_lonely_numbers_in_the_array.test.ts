import { findLonely } from '~/problems/s2150_find_all_lonely_numbers_in_the_array';
import { name } from './utils';

describe('Find All Lonely Numbers in the Array', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [10, 6, 5, 8],
      output: [10, 8],
    },
    {
      input: [1, 3, 5, 3],
      output: [1, 5],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(findLonely(example.input)).toEqual(example.output);
    });
  }
});
