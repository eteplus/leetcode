import { hasCycle } from '~/problems/s141_linked_list_cycle';
import { createCycleLinkedList } from '~/libs/linked_list';
import { name } from './utils';

describe('Reorder List', () => {
  const examples: Array<{
    input: [number[], number];
    output: boolean;
  }> = [
    {
      input: [[3, 2, 0, -4], 1],
      output: true,
    },
    {
      input: [[1, 2], 0],
      output: true,
    },
    {
      input: [[1], -1],
      output: false,
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const [nums, pos] = example.input;
      const head = createCycleLinkedList(nums, pos);
      expect(hasCycle(head)).toEqual(example.output);
    });
  }
});
