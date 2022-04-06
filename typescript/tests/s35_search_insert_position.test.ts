import { searchInsert } from '~/problems/s35_search_insert_position';
import { name } from './utils';

describe('Search Insert Position', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[1, 3, 5, 6], 5],
      output: 2,
    },
    {
      input: [[1, 3, 5, 6], 2],
      output: 1,
    },
    {
      input: [[1, 3, 5, 6], 7],
      output: 4,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      const [nums, target] = example.input;
      expect(searchInsert(nums, target)).toEqual(example.output);
    });
  }
});
