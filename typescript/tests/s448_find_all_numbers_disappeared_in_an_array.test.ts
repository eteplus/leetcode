import { findDisappearedNumbers } from '~/problems/s448_find_all_numbers_disappeared_in_an_array';
import { name } from './utils';

describe('Find All Numbers Disappeared in an Array', () => {
  const examples: Array<{
    input: number[];
    output: number[];
  }> = [
    {
      input: [4, 3, 2, 7, 8, 2, 3, 1],
      output: [5, 6],
    },
    {
      input: [1, 1],
      output: [2],
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(findDisappearedNumbers(example.input)).toEqual(example.output);
    });
  }
});
